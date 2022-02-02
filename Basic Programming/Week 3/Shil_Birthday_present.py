size = int(input())
li = list(map(int, input().strip().split(" ")))
li = set(sorted(li))
l = len(li)
ans = 0
for i in range(l):
    ans = ans + i
print(ans)
