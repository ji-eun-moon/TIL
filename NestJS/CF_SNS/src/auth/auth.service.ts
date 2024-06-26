import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersModel } from 'src/users/entity/users.entity';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { RegisterUserDto } from './dto/register-user.dto';
import { ENV_JWT_SECRET_KEY } from 'src/common/entity/const/env-keys.const';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  /**
   * 1. registerWithEmail
   * - email, nickname, password를 입력받고 사용자를 생성한다.
   * - 생성이 완료되면 accessToken과 refreshToken을 반환한다.
   *
   * 2. loginWithEmail
   * - email, password를 입력하면 사용자 검증을 진행한다.
   * - 검증이 완료되면 accessToken과 refreshToken을 반환한다.
   *
   * 3.loginUser
   * - 1, 2에서 필요한 accessToken과 refreshToken을 반환한다.
   *
   * 4. signToken
   * - 3에서 필요한 accessToken과 refreshToken을 sign하는 로직
   *
   * 5. authenticateWithEmailAndPassword
   * - 2에서 로그인을 진행할때 필요한 기본적인 검증 진행
   * - 1) 사용자가 존재하는지 확인
   * - 2) 비밀번호가 맞는지 확인
   * - 3) 모두 통과되면 사용자 정보 반환
   * - 4) loginWithEmail에서 반환된 데이터를 기반으로 토큰 생성
   */

  /**
   * 토큰을 sign 합니다.
   * @param user 사용자 정보
   * @param isRefreshToken sign할 토큰 타입이 refreshToken 인지 여부
   */
  signToken(user: Pick<UsersModel, 'email' | 'id'>, isRefreshToken: boolean) {
    const payload = {
      email: user.email,
      sub: user.id,
      type: isRefreshToken ? 'refresh' : 'access',
    };

    return this.jwtService.sign(payload, {
      secret: ENV_JWT_SECRET_KEY,
      expiresIn: isRefreshToken ? 3600 : 300,
    });
  }

  /**
   * 토큰을 반환합니다.
   * @param user 사용자 정보
   * @returns refreshToken | accessToken
   */
  loginUser(user: Pick<UsersModel, 'email' | 'id'>) {
    return {
      accessToken: this.signToken(user, false),
      refreshToken: this.signToken(user, true),
    };
  }

  /**
   * 이메일로 로그인 진행시 비밀번호를 검증합니다.
   * @param user 사용자 정보
   * @returns 검증 성공한 사용자 정보
   */
  async authenticateWithEmailAndPassword(
    user: Pick<UsersModel, 'email' | 'password'>,
  ) {
    const existingUser = await this.usersService.getUserByEmail(user.email);

    if (!existingUser) {
      throw new UnauthorizedException('존재하지 않는 사용자입니다.');
    }

    const passOk = await bcrypt.compare(user.password, existingUser.password);

    if (!passOk) {
      throw new UnauthorizedException('비밀번호가 틀렸습니다.');
    }

    return existingUser;
  }

  /**
   * 로그인합니다.
   * @param user 사용자 정보
   * @returns refreshToken, accessToken
   */
  async loginWithEmail(user: Pick<UsersModel, 'email' | 'password'>) {
    const existingUser = await this.authenticateWithEmailAndPassword(user);

    return this.loginUser(existingUser);
  }

  /**
   * 회원가입
   * @param user
   * @returns
   */
  async registerWithEmail(user: RegisterUserDto) {
    const hash = await bcrypt.hash(user.password, 10);

    const newUser = await this.usersService.createUser({
      ...user,
      password: hash,
    });

    return this.loginUser(newUser);
  }
}
