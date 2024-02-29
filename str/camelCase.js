function camelCase(n) {
    let trimmed = n.trim()
    let firstLetter = trimmed[0];
    let lower = trimmed.replace(firstLetter, (i) => i.toLowerCase())
    let clean = lower.replace(/\s/g, '-')
    let dirty = clean.replaceAll(/-./g, (i, d = 0, c = 1) => {
        return clean[c] = i.toUpperCase()
    })
    return console.log(dirty.replaceAll('-', ''))
}

camelCase('Camel Case')
camelCase('String not found')
camelCase('Nice Challenge')
camelCase(' Is not found ')
camelCase('CamelCase')