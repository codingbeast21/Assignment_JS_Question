function findLeapYears(start, end) {
    const leapYears = [];

    for (let year = start; year <= end; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            leapYears.push(year);
        }
    }

    return leapYears;
}

// Example usage:
const leapYears = findLeapYears(2000, 2025);
console.log("Leap Years between 2000 and 2025:", leapYears);
