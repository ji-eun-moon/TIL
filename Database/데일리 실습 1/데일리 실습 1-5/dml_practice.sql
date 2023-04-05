CREATE TABLE users (
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    age INTEGER NOT NULL,
    country TEXT NOT NULL,
    phone TEXT NOT NULL,
    balance INTEGER NOT NULL
);

-- 나이가 어린 순으로 정렬하고 페이지당 출력되는 데이터를 20개로 제한했을 때, 3번째 페이지를 조회하기
SELECT * FROM users
ORDER BY age ASC
LIMIT 20 OFFSET 40;