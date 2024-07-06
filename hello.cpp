#include <iostream>
using namespace std;

int main()

{
    int nums[3] = {1, 1, 2};
    int j = 1;
    for (int i = 1; i < sizeof(nums) / sizeof(nums[0]); i++)
    {
        if (nums[i] != nums[i - 1])
        {
            nums[j] = nums[i];
            j++;
        }
    }
    return j;
}
