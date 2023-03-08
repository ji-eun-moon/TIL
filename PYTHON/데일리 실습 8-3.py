class PublicTransport:
    cnt = 0
    def __init__(self, name, fare):
        self.name = name
        PublicTransport.fare = fare
    
    @classmethod
    def get_in(cls, num):
        cls.cnt += num
        return cls.cnt

    @classmethod
    def get_off(cls, num):
        cls.cnt -= num
        return cls.cnt

    @classmethod
    def profit(cls):
        total = cls.fare * cls.cnt
        return total


a = PublicTransport('jieun', 10000)
a.get_in(5)
a.get_off(3)
print(a.profit())