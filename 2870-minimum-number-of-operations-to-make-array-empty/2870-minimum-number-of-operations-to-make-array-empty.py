class Solution:
    def minOperations(self, nums: List[int]) -> int:
        count = Counter(nums)
        res = 0

        for total in count.values():

            #return -1, karena kita hanya mengambil 2 atau 3
            if total < 2:
                return -1
            
            res += total // 3
            if total % 3 == 1 or total % 3 == 2:
                res += 1

        return res
