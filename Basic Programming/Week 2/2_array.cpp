#include <bits/stdc++.h>

using namespace std;

int main()

{
    int n;
    cin >> n;
    int a[n], b[n];
    for (int i = 0; i < n; i++)
        cin >> a[i];
    for (int i = 0; i < n; i++)
        cin >> b[i];
    int aa = 0, bb = 0, suma = 0, sumb = 0;
    for (int i = 0; i < n; i++)
    {
        if (a[i] >= 0)
            suma = suma + a[i];
        else
            aa++;
    }
    for (int i = 0; i < n; i++)
    {
        if (b[i] >= 0)
            sumb = sumb + b[i];
        else
            bb++;
    }
    if (aa == 0 && bb == 1)
    {
        if (suma >= sumb)
            cout << 1;
        else
            cout << 0;
    }
    else if (aa == 1 && bb == 0)
    {
        if (sumb >= suma)
            cout << 1;
        else
            cout << 0;
    }
    else if (aa == 0 && bb == 2)
    {
        if (suma >= sumb)
            cout << abs(suma - sumb) + 1;
        else
            cout << 0;
    }
    else if (aa == 2 && bb == 0)
    {
        if (sumb >= suma)
            cout << abs(suma - sumb) + 1;
        else
            cout << 0;
    }
    else
        cout << "Infinite";
    return 0;
}