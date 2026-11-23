#include <bits/stdc++.h>

using namespace std;

// defination of function numRevs
void numRevs(int n){
    //stopping a function
    if(n == 0){
      return;
    }
    // to figure out the last number --> n % 10
    cout << n % 10;
    
    // to move the last number to 1st and to keep the faith in recursion or the functin
     numRevs(n/10);
    
    
}

int main(){
    // take input from the user
    int n;
    cin >> n;
    
    // to handle the edge case og 0
    if(n == 0){
        cout << 0;
    }else{
         numRevs(n);
    }
  
  return 0;
}