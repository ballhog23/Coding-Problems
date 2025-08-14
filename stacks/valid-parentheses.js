/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    if (s.length < 2) return false;

    const stack = [];
    const map = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']'],
    ]);

    for (const char of s) {
        if (map.has(char)) {
            stack.push(char)
        }

        if (!map.get(char)) {
            if (char === map.get(stack[stack.length - 1])) {
                stack.pop();
            }
            else return false;
        }
    };

    return stack.length === 0;
}

isValid("((") // f
isValid("()") // t
isValid("()[]{}") // t
isValid("(]") // f
isValid("([])") // t
isValid("([)]") // f