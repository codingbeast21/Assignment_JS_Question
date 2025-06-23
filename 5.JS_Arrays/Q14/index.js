function removeDuplicatesIgnoreCase(arr) {
    const seen = new Set();
    const result = [];

    for (let item of arr) {
        const lowerItem = item.toLowerCase();

        if (!seen.has(lowerItem)) {
            seen.add(lowerItem);
            result.push(item); 
        }
    }

    return result;
}

const inputArray = ["Apple", "Banana", "apple", "ORANGE", "orange", "BANANA"];
const uniqueArray = removeDuplicatesIgnoreCase(inputArray);

console.log("Original Array:", inputArray);
console.log("Array without duplicates (case-insensitive):", uniqueArray);
