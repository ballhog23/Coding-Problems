import os
import re


def main():
    cwd = os.getcwd()
    ranges = read_file_list(f"{cwd}/input.txt")
    # ranges = read_file_list(f"{cwd}/input-t.txt")
    print(cwd)
    total_p1 = 0
    total_p2 = 0
    ids_list = []

    for r in ranges:
        start_str, end_str = r.split('-')
        start, end = int(start_str), int(end_str)
        ids = list(range(start, end + 1))
        ids_list.append(ids)
    i = 0
    for id_list in ids_list:
        for id in id_list:
            str_id = str(id)
            lenn = len(str_id)
            max_repeating_chars = lenn // 2

            if lenn == 0:
                continue
            i += 1
            start = str_id[:max_repeating_chars]
            end = str_id[max_repeating_chars:]
            if start == end:
                total_p1 += id

            # match repeating digit sequence regex, for part 2
            regex = re.match(r"\b(\d+)\1+\b", str_id)
            if regex is not None:
                total_p2 += id
                    
    return total_p1, total_p2

            

def read_file_list(filepath: str):
    with open(filepath, "r") as file:
        return file.read().split(',')
    
main()