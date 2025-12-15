class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        s_map = self.build_map(s)
        t_map = self.build_map(t)
        
        return s_map == t_map

    def build_map(self, s: str) -> dict:
        hashmap = dict()

        for char in s:
            hashmap[char] = hashmap.get(char, 0) + 1
        
        return hashmap

init = Solution()
test1 = init.isAnagram("racecar", "carrace")
test2 = init.isAnagram("jar", "jam")

print(test1, test2)