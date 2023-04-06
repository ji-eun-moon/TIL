CREATE TABLE zoo (
  name TEXT NOT NULL,
  eat TEXT NOT NULL,
  weight INT NOT NULL,
  height INT,
  age INT
);

-- 1) 속성 값을 해당 항목에 맞게 지정해주어야 한다.
-- 그렇지 않으면 테이블 생성시 적은 순서대로 값이 지정된다.
INSERT INTO zoo (age, height, weight, name, eat) VALUES
(5, 180, 210, 'gorilla', 'omnivore');

-- 2) rowid는 고유값인데 중복되어 문제가 발생한 것이다.
-- 새 행을 삽입할 때마다 자동으로 할당되기 때문에 적어주지 않아도 된다. 
-- rowid를 지정해주고 싶으면 각 행마다 중복되지 않게 지정해주어야 한다. 
INSERT INTO zoo (name, eat, weight, age) VALUES
('dolphin', 'carnivore', 210, 3),
('alligator', 'carnivore', 250, 50);

-- 3) NOT NULL로 설정된 weight 값이 존재하지 않아 문제가 발생하였다.
-- weight 값을 추가해준다.
INSERT INTO zoo (name, eat, age, weight) VALUES
('dolphin', 'carnivore', 3, 80);
