/**
 * Converts a valid JSON string into a JavaScript object.
 * 
 * @param {string} json - A valid JSON-formatted string.
 * @returns {Object} - The JavaScript object representation of the JSON string.
 */

function jsonStringToObject(json) {
    return JSON.parse(json)
}

const result = jsonStringToObject('{"title": "JSCodebox", "category": "2"}')

console.log(result)