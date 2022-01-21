#include <iostream>
using namespace std;
int main(){

	int t; cin >> t;
	while(t--){
		int n,k; 
		cin >> n >> k;
		long a[n],avg,sum=0;
		for(int i=0;i<n;i++){
			 cin >> a[i];
			 sum+=a[i];
		}
		avg=sum/n;
		if(avg<=k){
			cout << 0 << '\n';
		}else{
			long ans = sum/(k+1) - n +1;
			cout << ans << '\n';
		}
	}

	return 0;
}