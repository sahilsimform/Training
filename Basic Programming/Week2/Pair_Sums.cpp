#include <iostream>
#include <algorithm>

using namespace std;

int main()
{
    int i, j, n, k, c = 0, l, r;
    cin >> n >> k;
    int A[n];
    for (i = 0; i < n; i++)
    {
        cin >> A[i];
    }
    sort(A, A + n);
    l = 0;
    r = n - 1;
    while (l < r)
    {
        if (A[l] + A[r] > k)
            r--;
        else if (A[l] + A[r] < k)
            l++;
        else
        {
            c = 1;
            break;
        }
    }
    if (c == 1)
        cout << "YES";
    else
        cout << "NO";
    return 0;
}