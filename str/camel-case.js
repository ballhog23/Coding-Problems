function camelCase(str) {
    const trimmed = str.trim();
    const explode = trimmed.split(' ');
    const toUpper = explode
      .filter( i =>i !== '')
      .map(i => i[0].toUpperCase() + i.slice(1, i.length))
    const join = toUpper.join('');
    return join.charAt(0).toLowerCase() + join.slice(1, join.length)
}


camelCase('Camel Case')
camelCase('String not found')
camelCase('Nice Challenge')
camelCase(' Is not found ')
camelCase('CamelCase')