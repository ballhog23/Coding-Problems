// Define the drop table with items and their drop rates
const dropTable = [
    { name: 'Torva platebody (damaged)', rate: 1 / 258 },
    { name: 'Torva platelegs (damaged)', rate: 1 / 258 },
    { name: 'Torva full helm (damaged)', rate: 1 / 258 },
    { name: 'Nihil horn', rate: 1 / 258 },
    { name: 'Zaryte vambraces', rate: 1 / 172 },
    { name: 'Ancient hilt', rate: 1 / 516 }
];

// Define the chance of hitting the drop table
const tableHitChance = 1 / 43; // Probability of hitting the table

// Normalize the drop rates so they sum to 1
const totalRate = dropTable.reduce((sum, item) => sum + item.rate, 0);

// map values from orginal array to avoid mutating initial values
const normalizedDropTable = dropTable.map(item => ({
    name: item.name,
    normalizedRate: item.rate / totalRate
}));

// console.log(normalizedDropTable)

// Function to simulate a drop
function getRandomDrop() {
    // Roll to determine if the drop table is hit
    // max of tableHitChance is 0.0232558139534884 
    if (Math.random() < tableHitChance) {
        // Compute the cumulative probabilities
        let cumulativeProbabilities = [];
        let currentSum = 0;

        for (let item of normalizedDropTable) {
            currentSum += item.normalizedRate;
            cumulativeProbabilities.push({ name: item.name, cumulativeProbability: currentSum });
            // console.log(cumulativeProbabilities);
        }

        // Roll for a specific item based on normalized probabilities
        const randomRoll = Math.random();

        for (let cumulativeItem of cumulativeProbabilities) {
            if (randomRoll < cumulativeItem.cumulativeProbability) {
                return cumulativeItem.name;
            }
        }
    }
    return null;
}

// Initialize variables to keep track of the number of tries
let tries = 0;
let item = null;

// Keep rolling until an item is obtained
do {
    tries++;
    item = getRandomDrop();
} while (item === null);

// Output the result
// console.log(`It took ${tries} tries to get: ${item}`);
