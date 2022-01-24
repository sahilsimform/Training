n, k = map(int, input().split(" "))
inp = []
rows = []
columns = []
left = n*n
for i in range(k):
      j, k = map(int, input().split(" "))
      if j not in rows:
            rows.append(j)
            left = left - n + len(columns)
      if k not in columns:
            columns.append(k)
            left = left - n + len(rows)
      print(left, end = " ")