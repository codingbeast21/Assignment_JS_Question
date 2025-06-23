function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        // Pick a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));

        // Swap arr[i] and arr[j]
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

// Example usage:
const myArray = [1, 2, 3, 4, 5, 6, 7];
console.log("Original Array:", myArray);
console.log("Shuffled Array:", shuffleArray([...myArray])); // using a copy to preserve original
