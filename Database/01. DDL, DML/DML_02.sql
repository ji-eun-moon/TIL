CREATE TABLE users (
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    age INTEGER NOT NULL,
    country TEXT NOT NULL,
    phone TEXT NOT NULL,
    balance INTEGER NOT NULL
);

-- users 테이블의 전체 행 수 조회하기
SELECT COUNT(*) FROM users;

-- 전체 유저의 평균 balance 조회하기 
SELECT avg(balance) From users;

-- 지역별 평균 balance 구하기
SELECT country, avg(balance) FROM users
GROUP BY country;
-- 지역별 평균 balance를 평균 balance 기준 오름차순 정렬하여 조회하기
SELECT country, avg(balance) FROM users
GROUP BY country ORDER BY avg(balance) DESC;

-- 나이가 30살 이상인 사람들의 평균 나이 구하기
SELECT AVG(age) FROM users WHERE age >= 30;

-- 각 지역별로 몇 명씩 살고 있는지 조회하기
SELECT country, COUNT(*) FROM users GROUP BY country;

-- 각 성씨가 몇 명씩 있는지 조회하기
SELECT last_name, COUNT(*) FROM users
GROUP BY last_name;
-- AS 키워드를 사용해 컬럼명 변경가능
SELECT last_name, COUNT(*) AS number_of_name FROM users
GROUP BY last_name;

-- 인원이 가장 많은 성씨 순으로 조회하기
SELECT last_name, COUNT(*) FROM users
GROUP BY last_name ORDER BY COUNT(*) DESC;

-- 각 지역별 평균 나이 조회하기
SELECT country, AVG(age) FROM users
GROUP BY country;