//heterograma

function isHeterogram(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z]/g, '');
    const charSet = new Set(cleanStr);
    return charSet.size === cleanStr.length;
}

// Ejemplo de uso
console.log(isHeterogram("subdermatoglyphic")); // true
console.log(isHeterogram("hello")); // false

//isograma

function isIsogram(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z]/g, '');
    const charCount = {};

    for (let char of cleanStr) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    const counts = Object.values(charCount);
    return counts.every(count => count === counts[0]);
}

// Ejemplo de uso
console.log(isIsogram("six-year-old")); // true
console.log(isIsogram("hello")); // false

//pangrama

function isPangram(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z]/g, '');
    const alphabet = new Set(cleanStr);
    return alphabet.size === 26;
}

// Ejemplo de uso
console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true
console.log(isPangram("Hello world")); // false