#include <iostream>
using namespace std;

bool isPrime(){

    for(int i =1; i<=n;i++){
        if(n % 2 == 0){
            cnt++;
        }
    }
    if(cnt == 2){
        return true;
    }else{
        return false;
    }
}



int main(){
    int n;
    cin >> n;
     bool ans = isPrime(n);
     if(ans){
        cout << "prime";
     }else{
        cout << " not prime"
     }
}
