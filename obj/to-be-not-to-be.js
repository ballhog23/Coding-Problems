var expect = function(val) {
    console.log(val, val === null)
    return {
        toBe: (val) => {
           return val === val ? true : 'Not Equal';
        },
        notToBe: (val) => {
            return val !== val ? 'Not Equal' : true;
        }
    }
 };

 expect(5).toBe(5); // true
 expect(5).notToBe(5); // true
 expect(5).notToBe(null); // true