# class PublicTransport:
#     cnt = 0
#     def __init__(self, name, fare):
#         self.name = name
#         self.fare = fare
    
#     def get_in(self, num):
#         PublicTransport.cnt += num
#         return PublicTransport.cnt

#     def get_off(self, num):
#         PublicTransport.cnt -= num
#         return PublicTransport.cnt

#     def profit(self):
#         total = self.fare * PublicTransport.cnt
#         return total

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

class Bus(PublicTransport):
    def __init__(self, name, fare, restrict):
        super().__init__(name, fare)
        self.restrict = restrict
    
    def get_in(self, num):
        PublicTransport.cnt += num
        if PublicTransport.cnt > self.restrict:
            return '더이상 탑승할 수 없습니다.'

a = Bus('jieun', 10000, 5)
print(a.get_in(10))

