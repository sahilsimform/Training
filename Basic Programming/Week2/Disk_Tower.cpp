#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n;
    cin >> n;
    int c = n;
    int a[n + 1] = {0};
    for (int i = 0; i < n; i++)
    {
        int x;
        cin >> x;
        a[x] = 1;
        if (x == c)
            while (a[c] == 1)
            {
                cout << c << " ";
                c--;
            }
        cout << "\n";
    }
    return 0;
}
