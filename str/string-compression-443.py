from typing import List

class Solution:
    def compress(self, chars: List[str]) -> int:
        write = 0
        s = ''
        lp, rp = 0, 1
        chars_len = len(chars)

        while rp < chars_len:

            if chars[lp] != chars[rp]:
                run_len = rp - lp
                chars[write] = chars[lp]
                write += 1
                s = str(run_len)

                if run_len > 1:
                    for char in s:
                        chars[write] = char
                        write += 1
                
                lp = rp

            rp += 1
        
        run_len = rp - lp
        chars[write] = chars[lp]
        write += 1
        s = str(run_len)
        if run_len > 1:
            for char in s:
                chars[write] = char
                write += 1

        return write

new = Solution()
new.compress(['a', 'a', 'b', 'b', 'c', 'c', 'c'])
# chars = ["a"] * 16 + ["b", "b"] + ["c"] * 12
# new.compress(chars)