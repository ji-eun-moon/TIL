CREATE TABLE users (
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    age INTEGER NOT NULL,
    country TEXT NOT NULL,
    phone TEXT NOT NULL,
    balance INTEGER NOT NULL
);


-- 전화번호 중간 4자리가 51로 시작하고 지역이 서울이 아닌 사람들의 이름과 전화번호 조회하기
SELECT first_name, phone, country FROM users
WHERE phone LIKE '%-51__-%' AND country != '서울';