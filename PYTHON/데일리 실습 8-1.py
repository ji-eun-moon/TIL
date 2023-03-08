participants =  [3, 7, 100, 21, 13, 6, 5, 7, 5, 6, 3, 13, 21]
class check:
    def __init__(self, participants):
        self.particiapnts = participants
    
    def check_participants(self):
        for i in range(len(self.particiapnts)):
            if self.particiapnts.count(self.particiapnts[i]) != 2:
                return f'깍두기는 {i+1}번 참가자'


result = check(participants)
print(result.check_participants())