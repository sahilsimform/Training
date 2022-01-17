n = int(input())

a = list(map(int,input().split()))

l = []

for i in range(n):

    l.append(list(bin(a[i])[2:]))   

for i in range(len(l)):

    l[i] = ''.join(sorted(l[i],reverse = True))

    print(int(l[i],2),end = ' ')