// find factorial using recursion
#include <bits/stdc++.h>

using namespace std;
#define int long long
// define the nFactorial function

int32_t nFactorial (int n){
    // where to stop the function
    if(n == 0){
        return 1;
    }
             int smallAns = nFactorial(n-1);
              int ans = n * smallAns;
             return ans;
  
}

int32_t main(){

    // take the input from the user

    int n;
    cin >> n;

     cout << nFactorial(n)<<endl;
     return 0;
    
}