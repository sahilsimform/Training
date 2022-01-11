n=int(input())
m=int(input())
s=list(map(int,input().split()))
k=0
l=0
for i in s:
   if i%2==0:
       k+=1
   else:
       l+=1
if k<l:
   print(k)
else:
   print(l)