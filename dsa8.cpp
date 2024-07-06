// code forces A. Watermelon

#include <iostream>
using namespace std;

int main()
{
    int w;
    cin >> w;
    w = w / 2;
    if (w % 2 == 0)
    {
        cout << "YES" << endl;
    }
    else
    {
        cout << "NO";
    }
    return 0;
}