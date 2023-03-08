class Doggy:
    num_of_dogs = 0
    birth_of_dogs = 0

    def __init__(self, name, sort):
        self.name = name
        self.sort = sort
        
    def bark():
        print('멍멍!')

    @classmethod
    def birth(cls):
        cls.num_of_dogs += 1
        cls.birth_of_dogs += 1
    
    @classmethod
    def die(cls):
        cls.num_of_dogs -= 1

    @classmethod
    def get_status(cls):
        print(f'num_of_dogs : {cls.num_of_dogs}')
        print(f'birth_of_dogs : {cls.birth_of_dogs}')

