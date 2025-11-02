def compact_expanded(input):
    input_size = len(input)
    chars = []
    lp, rp = 0, 1
    count = 1

    while (rp < input_size):
        if input[lp] == input[rp]:
            rp += 1
            count += 1
        else:
            chars.append((input[lp], count))
            lp = rp
            rp = lp + 1
            count = 1

    # the rest of the characters from lp through the end of array
    chars.append((input[lp], count))

    compact = "".join([value[0] + str(value[1]) for value in chars])

    return compact, input

compact, expanded = compact_expanded('AAAABBBAAAXCCC')
print(compact, expanded)