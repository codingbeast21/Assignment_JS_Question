function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();

    for (let item of arr) {
        if (seen.has(item)) {
            duplicates.add(item);
        } else {
            seen.add(item);
        }
    }

    return Array.from(duplicates);
}

// Example usage:
const sampleArray = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 1];
const result = findDuplicates(sampleArray);

console.log("Duplicate values:", result);  // Output: [1, 2, 3]
