from typing import List, Tuple
import os
from pprint import pprint
import time

start_time = time.perf_counter()

def main():
    cwd = os.getcwd()
    # data = read_file_list(f"{cwd}/test.txt")
    data = read_file_list(f"{cwd}/input.txt")
    empty = data.index('')
    raw_ranges = data[:empty]
    ids = [int(id) for id in data[empty + 1:]]
    ranges = []


def read_file_list(filepath: str):
    with open(filepath, "r") as file:
        return [line.strip() for line in file]

answer = main()
print(answer)
end_time = time.perf_counter()
elapsed_time = end_time - start_time
print(f"Execution time: {elapsed_time:.4f} seconds")