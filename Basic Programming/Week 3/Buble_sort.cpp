#include <bits/stdc++.h>

using namespace std;

int main()
{
    int n;
    cin >> n;
    int arr[n] = {0};
    for (int i = 0; i < n; i++)
        cin >> arr[i];
    bool swapped = true;
    int count = 0;
    while (swapped != false)
    {
        swapped = false;
        count++;
        for (int i = 0; i <= n - 2; i++)
        {
            if (arr[i] > arr[i + 1])
            {
                swap(arr[i], arr[i + 1]);
                swapped = true;
            }
        }
    }
    cout << count << endl;
    return 0;
}
