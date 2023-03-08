todo = [("Python Homework", 3), ("Essay", 4), ("Vacation", 10)]

task = input("해야할 일을 입력: ")
d_day = input("남은 일 수를 입력: ")

d_integer = int(d_day)

todo.append((task, d_integer))

print(todo)