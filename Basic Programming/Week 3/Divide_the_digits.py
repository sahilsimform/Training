def solve(num):
    first=""
    second=""
    length = len(num)
    num = sorted(num)
    for i in range(0,length,2):
        if length%2 and i==length-1:
            first += num[i]
        else:
            first += num[i]
            second += num[i+1]
    return int(first)+int(second)
n = int(input())
for _ in range(n):
    print(solve(input()))