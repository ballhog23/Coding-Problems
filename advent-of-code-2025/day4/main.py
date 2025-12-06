from typing import List, Tuple
import os
from pprint import pprint

def main():
    cwd = os.getcwd()
    # matrix = read_file_list(f"{cwd}/test.txt")
    matrix = read_file_list(f"{cwd}/input.txt")
    rows = len(matrix)
    cols = len(matrix[0])
    directions = [
        # r, c, dir
        (-1, 0, "TOP"),
        (0, 1, "RIGHT"),
        (1, 0, "BOTTOM"),
        (0, -1, "LEFT"),
        (-1, 1, "TOP RIGHT"),
        (-1, -1, "TOP LEFT"),
        (1, 1, "BOTTOM RIGHT"),
        (1, -1, "BOTTOM LEFT")
    ]

    part_one = p1(matrix, rows, cols, directions)
    part_two = p2(matrix, rows, cols, directions)

    return part_one, part_two
                
def p1(matrix, rows: int, cols: int, directions: List[Tuple[int,int,str]]):
    total_rolls = 0
    for r in range(rows):
        for c in range(cols):
            curr = matrix[r][c]
            roll_count = 0

            if curr != '@':
                continue

            for dr, dc, dir in directions:
                nr, nc = r + dr, c + dc

                if 0 <= nr < rows and 0 <= nc < cols:
                    if curr == '@' and matrix[nr][nc] == '@':
                        roll_count += 1

            if roll_count < 4:
                total_rolls += 1

    return total_rolls

def p2(matrix, rows: int, cols: int, directions: List[Tuple[int,int,str]]) -> int:
    total_roll_count = 0

    def extract_rolls(matrix):
        nonlocal total_roll_count
        mark_for_taking = []

        for r in range(rows):
            for c in range(cols):
                curr = matrix[r][c]
                roll_count = 0

                if curr != '@':
                    continue

                for dr, dc, dir in directions:
                    nr, nc = r + dr, c + dc

                    if 0 <= nr < rows and 0 <= nc < cols:
                        if curr == '@' and matrix[nr][nc] == '@':
                            roll_count += 1

                if roll_count < 4:
                    mark_for_taking.append((r,c))

        total_roll_count += len(mark_for_taking)

        for coordinates in mark_for_taking:
            r,c = coordinates[0], coordinates[1]
            matrix[r][c] = '.'


        if len(mark_for_taking) < 1:
            return

        return extract_rolls(matrix)
    
    extract_rolls(matrix)

    return total_roll_count


def read_file_list(filepath: str):
    with open(filepath, "r") as file:
        return [list(line.strip()) for line in file]

answer = main()
print(answer)
