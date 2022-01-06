import math

find=0
num=int(input())
for _ in range(num):
    num1=int(input())
    cal=int(math.sqrt(num1))
    i=1
    while(i<cal):
        find=i
        i=i*2
    for i in range(find,cal+2)[::-1]:
        if len(bin(i)) < len(bin(num1//i)):
            break
        find=num1+1-i
        
    print(find)