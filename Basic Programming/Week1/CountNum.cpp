
#include <iostream>
using namespace std;

int main(){
	int num;
	int a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;
	string s;
	cin>>s;

	num=s.length();

	for(int i=0;i<num;i++){
		if(s[i]=='0')
			{a++;}
		else if(s[i]=='1')
			{b++;}
		else if(s[i]=='2')
			{c++;}
		else if(s[i]=='3')
			{d++;}
		else if(s[i]=='4')
			{e++;}
		else if(s[i]=='5')
			{f++;}
		else if(s[i]=='6')
			{g++;}
		else if(s[i]=='7')
			{h++;}
		else if(s[i]=='8')
			{i++;}
		else if(s[i]=='9')
			{j++;}
	}


	cout<< "0 "<<a<<endl;
	cout<< "1 "<<b<<endl;
	cout<< "2 "<<c<<endl;
	cout<< "3 "<<d<<endl;
	cout<< "4 "<<e<<endl;
	cout<< "5 "<<f<<endl;
	cout<< "6 "<<g<<endl;
	cout<< "7 "<<h<<endl;
	cout<< "8 "<<i<<endl;
	cout<< "9 "<<j<<endl;
	return 0;
}
