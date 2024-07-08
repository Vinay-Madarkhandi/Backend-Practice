// https://codeforces.com/problemset/problem/231/A

#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n; // Read the number of problems
    int count = 0;

    for (int i = 0; i < n; ++i)
    {
        int petya, vasya, tonya;
        cin >> petya >> vasya >> tonya; // Read each problem's confidence levels

        // Check if at least two out of three are sure about the solution
        if (petya + vasya + tonya >= 2)
        {
            ++count;
        }
    }

    cout << count << endl; // Output the result
    return 0;
}
