t = int(input())
while t > 0 :
    x = int(input())
    print(2**bin(x)[2:].count('1'))  
    t -= 1