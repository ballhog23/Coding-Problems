nums_arr = [42, 7, 19, 73, 7, 5]

def main(arr: list[int]):
    sorted = False

    while not sorted:
        sorted = True

        for i in range(len(arr) - 1):
            if arr[i] > arr[i + 1]:
                temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                sorted = False
    
    return arr

result = main(nums_arr)
print(result)