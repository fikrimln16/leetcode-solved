class Solution:
    def addToArrayForm(self, num: List[int], k: int) -> List[int]:
        
        sisa = 0
        len_a = len(num) - 1
        len_b = len(str(k)) - 1
        
        res = []

        while len_a >= 0 or len_b >= 0 or sisa:
            # digit_a = int(num[len_a]) if len_a >= 0 else 0
            # digit_b = int(k[len_b]) if len_b >= 0 else 0
            digit_a = num[len_a] if len_a >= 0 else 0
            digit_b = int(str(k)[len_b]) if len_b >= 0 else 0

            total = digit_a + digit_b + sisa
            hasil = total % 10
            sisa = total // 10

            res.insert(0, hasil)

            len_a -= 1
            len_b -= 1

        return res