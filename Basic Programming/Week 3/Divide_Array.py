size = int(input().strip())
arr = list(map(int, input().strip().split()))[:size]
l = []
for _ in range(int(input().strip())):
    a = int(input().strip())
    l.append(a)
    t = 1
    for j in l:
        t *= j
        r = []
        for i in arr:
            r.append(i//t)
            print(" ".join(map(str, r)))
