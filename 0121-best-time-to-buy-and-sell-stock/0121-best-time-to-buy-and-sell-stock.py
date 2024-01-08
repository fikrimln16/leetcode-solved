class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        l = 0
        max_profit = 0

        for r in range(1, len(prices)):
            if prices[r] > prices[l]:
                cur_profit = prices[r] - prices[l]
                max_profit = max(max_profit, cur_profit)
            elif prices[r] < prices[l]:
                l = r

        return max_profit