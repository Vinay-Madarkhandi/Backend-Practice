#include <iostream>
using namespace std;

void printRectangle(int n)
{
    for (int i = 0; i <= n; i++)
    {
        for (int j = 0; j < i; j++)
        {
            cout << "*";
        }
        cout << endl;
    }
}

int main()
{
    printRectangle(8);
}