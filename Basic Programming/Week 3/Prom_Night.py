t=int(input())
for i in range(t):
    b,g=map(int,input().split());
    bb=list(map(int,input().split()));
    gg=list(map(int,input().split()));
    if(b>g):
        print("NO");
    else:
        f=0;
        bb.sort();
        gg.sort();
        for i in range(b):
            if(bb[i]<=gg[i]):
                print("NO");
                f=1;
                break
        if(f==0):
            print("YES");