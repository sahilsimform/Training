N = int(input())
s = input()
dict = {"a": 0, "e": 0, "i": 0, "o": 0, "u": 0}
for i in s:
    if i in dict:
        dict[i] = 1
count = 0
for i in dict:
    if dict[i] == 1:
        count += 1
if count == 5:
    print("YES")
else:
    print("NO")
