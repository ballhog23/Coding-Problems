function cloneObject(object, removeProperties) {
    let obj = Object.assign({}, object)

    removeProperties.forEach(i => {
        obj.hasOwnProperty(i) ? delete obj[i] : null;
    })
    
    return obj
}

// cloneObject({ "apples": 7, "bananas": 42, "citrones": 20, "sausages": 2 }, ["sausages"])
cloneObject({ "name": "Iron Man", "age": 42, "superPower": "None", "friends": 0, "overweight": true, "hungry": true }, ["overweight", "hungry"])