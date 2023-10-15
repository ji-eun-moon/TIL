import { GetStaticProps, NextPage, NextPageContext } from 'next'  // 타입을 위해 도입
import Head from 'next/head'  // Next.js의 내장 컴포넌트
import Link from 'next/link';
import { useRouter } from 'next/router'

// 페이지 컴포넌트의 props 타입 정의
type SSGProps = {
    message: string;
}

// SSG용 페이지 구현
// NextPage는 Next.js의 Pages용 타입
// NextPage<props>에서 props가 들어가는 Page임을 명시

// SSG는 getStaticProps가 반환한 props를 받을 수 있다.
// NextPage<SSGProps>는 Message: string만을 받아 생성된 페이지 타입
// Next.js의 페이지 컴포넌트나 함수 타입은 공식 문서 참고

const SSG: NextPage<SSGProps> = (props) => {
    const { message } = props;
    const router = useRouter()

    const handleClick = () => {
        router.push({ 
            pathname: '/ssr', 
            query: { 
                keyword: 'hello' 
            },
        },
        '/ssr'
        );
      };

    return (
        <div>
            {/* Head 컴포넌트로 감싸면, 그 요소는 <head> 태그에 배치됨 */}
            <title>Static Site Generation</title>
            <link rel="icon" href="/favicon.io" />
            <main>
                <p>
                    이 페이지는 정적 사이트 생성을 통해 빌드 시 생성된 페이지입니다.
                </p>
                <p>{message}</p>
                {/* /ssr 로 이동하기 위한 링크 작성 */}
                <Link href={{
                    pathname: '/ssr',
                    query: { keyword: 'hello' },
                }}
                as="/ssr">
                    Go to SSR
                </Link>
                <button onClick={handleClick}>hello</button>
            </main>
        </div>
    );
};

// getStaticProps는 빌드 시 실행된다.
// GetStaticProps<SSGProps>는 SSGProps 인수로 받는 getStaticProps 타입

export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
    const timestamp = new Date().toLocaleString();
    const message = `${timestamp}에 getStaticProps가 실행됐습니다.`;
    console.log(message);
    return {
        // 여기에서 반환된 props를 기반으로 페이지 컴포넌트를 그린다.
        props: {
            message,
        },
    };
};

export default SSG