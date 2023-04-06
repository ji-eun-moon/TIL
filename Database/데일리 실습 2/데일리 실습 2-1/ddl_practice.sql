CREATE TABLE animals (
    animal_name TEXT NOT NULL,
    height INTEGER NOT NULL,
    weight INTEGER NOT NULL,
    age INTEGER
);

-- meal 칼럼 추가, TEXT, NULL값 허용
ALTER TABLE animals ADD COLUMN meal TEXT;

-- animal_name을 name으로 변경하기
ALTER TABLE animals RENAME COLUMN animal_name TO name;

-- table 이름 animals를 zoo로 변경하기
ALTER TABLE animals RENAME TO zoo;

-- zoo 테이블 삭제하기
DROP TABLE zoo;