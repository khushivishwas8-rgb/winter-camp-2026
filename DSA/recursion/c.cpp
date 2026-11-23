// zig zag pattren

#include <bits/stdc++.h>
using namespace std;

void printinc(int n){

    if(n == 1){
        cout << 1 << endl;
        return;
    }
     cout << n << endl;
    printinc(n-1);
    cout << n << endl;

}
// void printdec(int n){

//     if(n == 0){
//         return;
//     }
    
//     cout << n << endl;
//     printinc(n-1);
    

// }

int main(){

    // take input from thje user

    int n;
    cin >> n;
    
    printinc(n);
    return 0;

}