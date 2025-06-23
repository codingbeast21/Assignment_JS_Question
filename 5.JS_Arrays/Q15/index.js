const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const o = ["th", "st", "nd", "rd"];

for (let i = 0; i < color.length; i++) {
    let suffix;

    // Handle special cases for 1st, 2nd, 3rd
    if (i + 1 === 1) {
        suffix = o[1]; // "st"
    } else if (i + 1 === 2) {
        suffix = o[2]; // "nd"
    } else if (i + 1 === 3) {
        suffix = o[3]; // "rd"
    } else {
        suffix = o[0]; // "th"
    }

    console.log(`${i + 1}${suffix} choice is ${color[i]}.`);
}
