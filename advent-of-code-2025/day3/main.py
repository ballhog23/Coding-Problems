from functools import reduce
import os

def main():
    cwd = os.getcwd()
    # batteries = read_file_list(f"{cwd}/test.txt")
    batteries = read_file_list(f"{cwd}/input.txt")
    joltages_p1, joltages_p2 = 0, 0

    for bank in batteries:
        joltages_p1 += p1(bank)
        joltages_p2 += p2(bank)
    return joltages_p1, joltages_p2
        
def p1(bank):
    bank_lenn = len(bank)
    max_one, max_two = 0, 0
    max_one_index = bank.index(max(bank))
    joltages = []

    if max_one_index == bank_lenn - 1:
        # we know that max_one_index contains the largest number to the right of the list
        # we can create a new list excluding the former and search for the largest number
        max_two = bank[max_one_index]
        max_one = max([element for index, element in enumerate(bank) if index != max_one_index])
    else:
        # now we know the first largest number is the largest in the list
        # we create a new list and search the right half for the next largest number
        max_one = max(bank)
        max_two = max(bank[max_one_index + 1:])

    joltages.append(int(max_one + max_two))

    return reduce(lambda x, y: x + y, joltages)

def p2(bank):
    joltages = [element for element in bank]
    cp = []
    needed = 12 - len(cp)

    while len(cp) < 12:
        considered = max(joltages[:len(joltages) - needed + 1])
        cp.append(considered)
        needed = 12 - len(cp)
        joltages = joltages[joltages.index(considered) + 1:]

    
    return int(reduce(lambda x, y: x + y, cp))
    
    
    

def read_file_list(filepath: str):
    with open(filepath, "r") as file:
        return [line.strip() for line in file]

answer = main()
print(answer)