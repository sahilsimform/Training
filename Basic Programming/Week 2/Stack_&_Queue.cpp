#include <bits/stdc++.h>

using namespace std;

int main()
{
    long long int n, k;
    cin >> n >> k;
    long long int arr[n] = {};
    for (long long int i{}; i < n; i++)
    {
        cin >> arr[i];
    }
    long long int max = -1;
    long long int front[k];
    long long int back[k];
    front[0] = arr[0];
    for (long long int i{1}; i < k; i++)
    {
        front[i] = arr[i] + front[i - 1];
    }
    back[k - 1] = 0;
    long long int t{n - 1};
    for (long long int i{k - 2}; i >= 0; i--)
    {
        back[i] = arr[t] + back[i + 1];
        t -= 1;
    }
    for (long long int i{}; i < k; i++)
    {
        long long int sum = front[i] + back[i];
        if (sum > max)
            max = sum;
    }
    cout << max;
}