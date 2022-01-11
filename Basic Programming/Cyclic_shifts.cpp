#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main() {
    int t;
    cin >>t;
    while(t--)
    {
        unsigned short int n,m,n1,n2;
        char c;
        cin >> n >> m >> c;
        if(c=='L')
        {
        n1=n<<m;
        n2=n>>(16-m);
        n=n1|n2;
        }
        else if(c=='R')
        {
            n1=n>>m;
            n2=n<<(16-m);
            n=n1|n2;
        }
            cout << n << "\n";
    }   
    return 0;   
}