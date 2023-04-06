CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    first_name TEXT,
    last_name TEXT NOT NULL,
    age INTEGER NOT NULL,
    country TEXT NOT NULL,
    phone TEXT NOT NULL,
    balance INTEGER NOT NULL
);

INSERT INTO users
VALUES
    (1, '미현', '김', 19, '경기도', '011-211-8482', 300),
    (2, '', '최', 33, '제주특별자치도', '', 300),
    (3, '미숙', '이', 21, '서울특별시', '010-2112-4958', 480),
    (4, '남석', '박', 18, '경기도', '011-484-8667', 260),
    (5, '철수', '박', 22, '경상남도', '016-295-8989', 500),
    (6, '', '박', 45, '전라북도', '', 320),
    (7, '민준', '이', 35, '전라남도', '019-965-8833', 450),
    (8, '', '남', 24, '충청남도', '010-5882-5969', 210),
    (9, '신', '유', 29, '경상북도', '010-4949-2848', 290),
    (10, '', '김', 18, '대전광역시', '', 300);

-- 나이가 25 미만인 사람들의 id, age, balance 정보를 
-- age는 내림차순 balance는 오름차순으로 조회하기
SELECT id, age, balance FROM users
WHERE age < 25
ORDER BY age DESC, balance ASC;

-- first_name 이 존재하는 사람들 중 balance가 400보다 큰 사람의 frist_name과 balance 확인하기
SELECT first_name, balance FROM users
WHERE balance > 400;

-- phone의 값이 null인 사람들의 phone 정보를 '알수 없음'으로 수정하기
UPDATE users
SET phone = '알 수 없음'
WHERE phone = '';

