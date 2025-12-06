import os
from typing import List

dial = 50
reaches_zero = 0
passthrough_zero = 0

def main():
    global dial, reaches_zero, passthrough_zero

    cwd = os.getcwd()
    print(f"{cwd}/day1-p1.txt")
    rotations = read_file_list(f"{cwd}/day1-p1.txt")

    for rotation in rotations:
        if not rotation:
            continue

        direction = rotation[0]
        distance = int(rotation[1:])

        for _ in range(distance):
            if direction == "L":
                dial = (dial - 1) % 100
            else:
                dial = (dial + 1) % 100

            if dial == 0:
                passthrough_zero += 1

        if dial == 0:
            reaches_zero += 1

    print(f"The password for part 1 is: {reaches_zero}")
    print(f"The password for part 2 is: {passthrough_zero}")


def read_file_list(filepath: str) -> List[str]:
    with open(filepath, "r") as file:
        return [line.strip() for line in file]


main()
