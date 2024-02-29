// You are tasked with implementing a JavaScript function named cloneObject that takes two parameters:
// an object (object) and an array of strings (removeProperties).
// The goal of this function is to create a shallow copy of the input object and remove specified properties from the copy.

function cloneObject(object, removeProperties) {
    let obj = Object.assign({}, object) // creates a shallow copy of the object passed

    removeProperties.forEach(i => obj.hasOwnProperty(i) ? delete obj[i] : null)

    return obj
}

cloneObject({ "apples": 7, "bananas": 42, "citrones": 20, "sausages": 2 }, ["sausages"])
cloneObject({ "apples": 7, "bananas": 42, "citrones": 20, "sausages": 2 }, [])
cloneObject(
    { "name": "Iron Man", "age": 42, "superPower": "None", "friends": 0, "overweight": true, "hungry": true },
    ["overweight", "hungry"]
)
