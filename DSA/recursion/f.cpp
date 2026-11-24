//F. Sum of first N Natural Numbers

#include <bits/stdc++.h>
using namespace std;
#define int long long

//create the defination of the function

int
 computeSum(int n){

    // to stop the recursion
     if(n == 0){
        return 0;
     }

     int smallAns = computeSum(n-1);
     int ans = n + smallAns;
     return ans;
}

int32_t main(){

    // take input 
     int n;
     cin >> n;

     // call the function to perform the task

     cout <<computeSum(n) << endl;
     return 0;
}