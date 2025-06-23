function union(arr1, arr2) {
    return Array.from(new Set([...arr1, ...arr2])).sort((a, b) => a - b);
}

console.log(union([1, 2, 3], [100, 2, 1, 10]));

