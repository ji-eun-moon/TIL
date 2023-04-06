-- articles 테이블 만들기
CREATE TABLE articles (
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    userid INTEGER NOT NULL
);

INSERT INTO articles
VALUES
    ('대부', '대부내용이다', 1),
    ('행복', '행복내용이다', 2),
    ('극한직업', '극한직업내용이다', 3),
    ('타이타닉', '디카프리오', 7),
    ('엄복동', '자전차왕의 일대기', 2);

-- users 테이블 만들기
CREATE TABLE users (
    name TEXT NOT NULL,
    roleid TEXT NOT NULL
);

INSERT INTO users
VALUES
    ('kevin', 1),
    ('aiden', 3),
    ('jorny', 3),
    ('bob', 2),
    ('kate', 1);

-- INNER JOIN
-- 두 테이블에서 일치하는 데이터만 결과 출력
SELECT * FROM articles INNER JOIN users ON userid=users.rowid;
-- 아래 방법도 가능하지만 권장하지는 않음
SELECT * FROM articles, users 
WHERE articles.userid=users.rowid;

-- LEFT JOIN
-- 왼쪽 테이블의 데이터를 기준으로 오른쪽 데이터 결합
-- 일치하는 항목 없을 경우 해당 항목 NULL 값으로 채움 
SELECT * FROM articles LEFT JOIN users ON userid=users.rowid;

-- RIGHT JOIN
-- LEFT의 반대, SQLite 에서는 지원하지 않음
SELECT * FROM articles RIGHT JOIN users ON userId=users.rowId;