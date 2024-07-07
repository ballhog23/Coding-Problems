// You are tasked with implementing a JavaScript function named cloneObject that takes two parameters:
// an object (object) and an array of strings (removeProperties).


function cloneObject(object, removeProperties) {

    let obj = {};

    // loop through properties of passed object
    for (let key in object) {

        // and if the property does not exist in the removeProperties array, push to new object
        if (object.hasOwnProperty(key) && !removeProperties.includes(key)) {
            obj[key] = object[key];
        }
    }

    return obj;
}

cloneObject(
    { "apples": 7, "bananas": 42, "citrones": 20, "sausages": 2 },
    ["sausages"]
)

cloneObject(
    { "name": "Iron Man", "age": 42, "superPower": "None", "friends": 0, "overweight": true, "hungry": true },
    ["overweight", "hungry"]
)

cloneObject(
    { "a": 1, "z": 25, "h": 8, "i": 9, "d": 4, "u": 20, "p": 15 },
    []
)
