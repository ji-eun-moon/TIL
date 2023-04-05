CREATE TABLE users (
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    age INTEGER NOT NULL,
    country TEXT NOT NULL,
    phone TEXT NOT NULL,
    balance INTEGER NOT NULL
);


-- 이름이 '건우'이고 지역 정보가 '경기도'인 데이터 조회하기
SELECT first_name, country FROM users
WHERE first_name == '건우' AND country=='경기도';

-- 경기도 혹은 강원도에 살지 않는 사람들 중에서
-- 나이가 20살 이상 30살 이하인 사람들의 데이터를 나이 기준 오름차순으로 조회하기
SELECT first_name, country, age FROM users
WHERE country NOT IN ('경기도', '강원도') AND age BETWEEN 20 AND 30
ORDER BY age;