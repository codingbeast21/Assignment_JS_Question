function difference(arr1, arr2) {
   
    const flat1 = arr1.flat(Infinity);
    const flat2 = arr2.flat(Infinity);

    const set1 = new Set(flat1);
    const set2 = new Set(flat2);

    const result = [...set1, ...set2].filter(
        item => !(set1.has(item) && set2.has(item))
    );

    return result.map(String); 
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]));