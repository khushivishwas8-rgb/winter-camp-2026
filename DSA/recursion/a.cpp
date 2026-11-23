#include <bits/stdc++.h>

using namespace std;

void  print1toN(int n){
    
    if(n == 0){
        return;
    }
    
     print1toN(n-1);
     cout << n << endl;
     print1toN(n-1);
}

int main(){
    // take input from the user
    
    int n;
    cin >> n;
    
    print1toN(n);
    return 0;
}