CREATE TABLE zoo (
    name TEXT NOT NULL,
    eat TEXT NOT NULL,
    weight INTEGER NOT NULL,
    height INTEGER,
    age INTEGER
);

-- table에 데이터 추가
INSERT INTO zoo (name, eat, weight, height, age)
VALUES
    ('gorilla', 'omnivore', 215, 180, 5),
    ('rabbit', 'herbivore', 3, 150, ''),
    ('tiger', 'carnivore', 220, 115, 3),
    ('elephant', 'herbivore', 3800, 280, 10),
    ('dog', 'omnivore', 8, 20, 1),
    ('eagle', 'carnivore', 8, 75, ''),
    ('dolphin', 'carnivore', 210, '', 3),
    ('alligator', 'carnivore', 250, 50, ''),
    ('panda', 'herbivore', 80, 90, 2),
    ('pig', 'omnivore', 70, 45, 5);


-- 모든 동물의 이름과 키 조회하기
SELECT name, height FROM zoo;

-- 토끼의 키를 15로 수정하기
UPDATE zoo
SET height = 15
WHERE name = 'rabbit';

-- 잡식동물(omnivore) 데이터만 삭제하기
DELETE FROM zoo WHERE eat = 'omnivore';