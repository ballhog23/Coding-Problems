from typing import List

class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        seen = set()

        for num in nums:
            if num in seen:
                return True
            
            seen.add(num)

        return False
        
init = Solution()
test1 = init.hasDuplicate([1,2,3,3])
test2 = init.hasDuplicate([1,2,3,4])
print(test1, test2)