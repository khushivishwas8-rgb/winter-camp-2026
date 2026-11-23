// find factorial using recursion
#include <bits/stdc++.h>

using namespace std;

// define the nFactorial function

int nFactorial (int n){
    // where to stop the function
    if(n == 0){
        return;
    }

    // to find the factorial 
    // - Take the current number n.
    // - Multiply it by the factorial of n - 1.
    // - Call the same function again.

 return n * nFactorial(n-1);
}

int main(){

    // take the input from the user

    int n;
    cin >> n;

     nFactorial(n);
    return 0;
}