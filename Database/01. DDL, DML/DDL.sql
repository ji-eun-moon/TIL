-- contacts 테이블 생성하기
CREATE TABLE contacts (
    name TEXT NOT NULL,
    age INTEGER NOT NULL,
    email TEXT NOT NULL UNIQUE
);

-- 테이블 이름 변경하기
ALTER TABLE contacts RENAME TO new_contacts;

-- 컬럼 이름 변경하기
ALTER TABLE new_contacts RENAME COLUMN name TO last_name;

-- 새 컬럼 추가하기
ALTER TABLE new_contacts ADD COLUMN address TEXT NOT NULL;
-- 새 컬럼 추가시 기존데이터 있을 경우 오류발생 방지하기
ALTER TABLE new_contacts 
ADD COLUMN address TEXT NOT NULL DEFAULT 'no address';

-- 컬럼 삭제하기
ALTER TABLE new_contacts DROP COLUMN address;

-- 테이블 삭제하기
-- 제거하면 되돌릴 수 없으므로 조심하자!
-- DROP TABLE contacts;