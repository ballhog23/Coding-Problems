# def function(fruits):
#     if not fruits:
#         print('empty list')
#         return
#     strr = ''

#     for i in range(len(fruits)):
#         curr = fruits[i]
#         if i != len(fruits) - 1:
#             strr += f"{curr}, "
#         else:
#             strr += f"and {curr}"
#     print(strr)

def list_formatter(arr):
    if not arr:
        print('empty arr')
        return
    strr = f"{', '.join(arr[:-1])} and {arr[-1]}!"
    return strr

    # ... : is the 'slice' operator it returns a slice of the array
    # fruits[:-1] == ['apple', 'banana', 'pear'] joins with space and comma
    # fruits[-1] == ['raspberry'] adds last element after and



fruits = ['apple', 'banana', 'pear', 'raspberry']
fruits_list = list_formatter(fruits)
print(fruits_list)