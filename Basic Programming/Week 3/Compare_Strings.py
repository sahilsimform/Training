n, q = map(int, input().split())
a = input()
b = input()
for _ in range(q):
    c = int(input())
    k = c*'1'+b[c:]
    if(k >= a):
        print("YES")
    else:
        print("NO")
