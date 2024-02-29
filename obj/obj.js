function cloneObject (object, removeProperties) {
    let obj = {...object}
    removeProperties.forEach(element => {
    Object.hasOwn(obj, element) ? delete obj[element] : false;
    })
    return obj;
}

// cloneObject({ "apples": 7, "bananas": 42, "citrones": 20, "sausages": 2 }, ["sausages"])
cloneObject({ "name": "Iron Man", "age": 42, "superPower": "None", "friends": 0, "overweight": true, "hungry": true }, ["overweight", "hungry"])
// cloneObject({ "a": 1, "z": 25, "h": 8, "i": 9, "d": 4, "u": 20, "p": 15 }, [])