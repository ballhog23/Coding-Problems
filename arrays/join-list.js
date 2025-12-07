const fruits = ["apple", "banana", "pear", "raspberry"];

const listFormatterEn = new Intl.ListFormat("en-US", {
    style: 'long',
    type: 'conjunction',
});

const formattedFruits = listFormatterEn.format(fruits);
console.log(formattedFruits);