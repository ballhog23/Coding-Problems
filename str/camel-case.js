function camelCase(str) {
    let trimmed = str.trim();
    trimmed = trimmed.charAt(0).toLowerCase() + trimmed.slice(1);
    // const regex = /(?<=\s)(\w)/g;
    const regex = /\s(?<toCamel>\w)/g;
    let exec = regex.exec(trimmed);
    let array;

    // console.log(exec)
    
    while ((array = regex.exec(trimmed)) !== null) {
        console.log(array)
    }

}


camelCase('Camel Case')
camelCase('String not found')
camelCase('Nice Challenge')
camelCase(' Is not found ')
camelCase('CamelCase')