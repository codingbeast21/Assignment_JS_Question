function removeSpecificValues(arr) {
    return arr.filter(value => 
        value !== null &&
        value !== 0 &&
        value !== "" &&
        value !== false &&
        value !== undefined &&
        !Number.isNaN(value)
    );
}
const sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];
const result = removeSpecificValues(sampleArray);

console.log(result); 
