#include <iostream>

using namespace std;

int main()
{
    int n, c = 0;
    cin >> n;
    double l[n], b[n];
    for (int i = 0; i < n; i++)
    {
        cin >> l[i] >> b[i];
    }
    double d = 0, e = 0;
    for (int i = 0; i < n; i++)
    {
        d = l[i] / b[i];
        e = b[i] / l[i];
        if (d >= 1.6 && d <= 1.7)
            c++;
        if (e >= 1.6 && e <= 1.7)
            c++;
    }
    cout << c;
}