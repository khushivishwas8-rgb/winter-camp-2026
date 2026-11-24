//POWER
/*
x , n
2,  3
power = 2*2*2 = 8
x ki power n = x * x * x * ................x
x ki power n = x ki power (n-1)
             = x ki power (n-1) * x
*/

#include <bits/stdc++.h>
using namespace std;
#define int long long

//defination of Power

int Power( int x, int n){
    // to stop
    if( n== 0) return 1;

    int smallAns = Power(x, n-1);
    int ans =  x * smallAns;
    return ans;
}

int32_t main(){

    // take input 
    
    int x, n;

    cin >> x >> n;

    cout << Power(x,n) <<endl;
}