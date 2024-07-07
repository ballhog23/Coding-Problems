function camelCase(n) {
    // trim string
    let trimmed = n.trim();

    // grab first character and lowercase it
    let firstLetter = trimmed[0].toLowerCase();
    let restOfString = trimmed.slice(1);

    // combine the first lowercase letter with the rest of the string
    let lower = firstLetter + restOfString;

    // replace spaces with a delimiter '-' in this case
    let uniformed = lower.replace(/\s+/g, '-');

    // capitalize first character following a delimiter '-', implicit return from function
    let camel = uniformed.replace(/-./g, (match) => match.charAt(1).toUpperCase());


    return camel;
}

// Test cases
camelCase('Camel Case'); // camelCase
camelCase('String not found'); // stringNotFound
camelCase('Nice Challenge'); // niceChallenge
camelCase(' Is not found '); // isNotFound
camelCase('CamelCase'); // camelcase

