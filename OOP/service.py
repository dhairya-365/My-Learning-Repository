class addition:
    def __init__(self,num1,num2):
        self.num1 = num1 
        self.num2 = num2 
        print("addition : ",self.num1 + self.num2) 

class _trial:
    def __init__(self):
        print("in a protected class ")

class __confidential:
    def __init__(self):
        pass 
    # this class cannot be accessed outside the file.
