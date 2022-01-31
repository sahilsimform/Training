#include <bits/stdc++.h>

using namespace std;

int f(int n)
{
    int sum = 0;
    while (n >= 16)
    {
        int que = n / 16;
        sum += n % 16;
        n = que;
    }
    sum += n;
    return sum;
}
int main()
{
    int n, count = 0;
    cin >> n;
    while (n--)
    {
        int l, r;
        cin >> l >> r;
        while (l <= r)
        {
            int m = f(l);
            int temp = __gcd(m, l);
            if (temp > 1)
            {
                count++;
            }
            l++;
        }
        cout << count << endl;
        count = 0;
    }
    return 0;
}