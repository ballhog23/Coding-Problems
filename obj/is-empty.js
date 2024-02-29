/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    return console.log(Object.keys(obj).length > 0 ? true : false)
};

isEmpty({"x": 5, "y": 42})
isEmpty({})
isEmpty([])
isEmpty([null, false, 0])
