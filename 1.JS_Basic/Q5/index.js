function rotateString() {
    let str = 'w3resource';
    console.log('Initial string:', str);
     // Get last character
        let lastChar = str.slice(-1);
        // Remove last character and add it to front
        str = lastChar + str.slice(0, -1);
        console.log('Rotated string:', str);
       
}

rotateString();