#include <iostream>

using namespace std;

int main()
{
	int num;
	cin>>num;
	int arr[num];
	for(int i=0; i<=num;i++)
	{
		cin>>arr[i];
	}

	for (int j = num - 1; j >= 0; j--) {
        cout << arr[j] << endl;
    }

	return 0;
}
