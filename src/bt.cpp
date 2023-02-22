#include<iostream>

using namespace std;

int max(int a[], int n) {
    int max = a[0]
    for(int i = 1; i<n; i++) {
        if(max < a[i]) {
            max = a[i]
        }
    }
    return max;
}
int min(int a[], int n) {
    int min = a[0]
    for(int i = 1; i<n; i++) {
        if(min > a[i]) {
            min = a[i]
        }
    }
    return max;
}
void main() {
    int arr[3][3] = {
        {1,2,3},
        {5,1,4},
        {7,2,3}
    };

    int b[3][3];

    for(i = 0; i<3; i++) {
        if(i%2==0) {
            k = max(arr[i], 3)
        } else {
            k = min(arr[i], 3)
        }

        for(j = 0; j<3 ; j++) {
            b[i][j] = arr[i][j]*k
        }
    }

    for(i = 0; i < 3; i++) {
        for(j = 0; j<3; j++) {
            printf("%d", b[i][j])
        }
    }
}