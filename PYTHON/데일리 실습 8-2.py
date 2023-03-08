class Person:
    def __init__(self, name, age):
        Person.name = name
        self.age = age

    @classmethod
    def get_age(cls, name, year):
        age = 2023 - year + 1
        return Person(name, age)

    def check_age(self):
        if self.age > 19:
            return True
        elif self.age <= 19:
            return False

#Driver's code
person1 = Person('Mark', 20)
person2 = Person.get_age('Rohan', 1992)

print(person1.name, person1.age) 
print(person2.name, person2.age)
print(person1.check_age())
print(person2.check_age())
