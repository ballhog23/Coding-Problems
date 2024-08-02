// Given is an object obj each with two properties (name & category) of type String.
// Return the value of the property with the longer string.
// If both are of equal length, return the value of the name property.

function theGround(obj) {
    let name = obj.name;
    let cat = obj.category;

    if (name.length > cat.length) {
        return name
    } else if (name.length === cat.length) {
        return name
    } else {
        return cat
    }
}

function theGround2(obj) {
    let name = obj.name;
    let cat = obj.category;
  
    // Use ternary operator for brevity
    return (name.length >= cat.length) ? name : cat;
  }

theGround(
    {"name":"dirt","category":"alpha"}
  )
//   'alpha'

  theGround(
    {"name":"stone","category":"alpha"}
  )
//   'stone'

  theGround(
    {"name":"slush","category":"beta"}
  )
//   'slush'

  theGround(
    {"name":"quartz","category":"gamma"}
  )
//   'quartz'

  theGround(
    {"name":"water","category":"delta"}
  )
//   'water'
