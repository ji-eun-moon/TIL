-- products 테이블 만들기
CREATE TABLE products (
    name TEXT NOT NULL,
    p_id INTEGER NOT NULL
);

INSERT INTO products
VALUES
    ('책상', 1),
    ('의자', 2),
    ('컴퓨터', 3);

-- colors 테이블 만들기
CREATE TABLE colors (
    name TEXT NOT NULL,
    c_id INTEGER NOT NULL
);

INSERT INTO colors
VALUES
    ('red', 1),
    ('blue', 2),
    ('white', 3);

-- CROSS JOIN
-- 모든 조합 출력
SELECT * FROM products CROSS JOIN colors;
