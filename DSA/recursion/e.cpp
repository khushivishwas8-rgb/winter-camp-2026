// find factorial using recursion
#include <bits/stdc++.h>

using namespace std;

// define the nFactorial function

int nFactorial (int n){
    // where to stop the function
    if(n == 0){
        return 1;
    }
    int smallAns = nFactorial(n-1);
     int ans = n * smallAns;
     return ans;
  
}

int main(){

    // take the input from the user

    int n;
    cin >> n;

     cout << nFactorial(n)<<endl;
    
}