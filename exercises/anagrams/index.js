// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    if (stringA.length !== stringB.length){
        return false;
    }

    const freq = new Array(26).fill(0);

    for (let i = 0; i < stringA.length; i++) {
        const charCodeA = stringA.toLowerCase().charCodeAt(i) - 97;
        const charCodeB = stringB.toLowerCase().charCodeAt(i) - 97;

        freq[charCodeA]++;
        freq[charCodeB]--;
    }

    return freq.every((value) => value === 0);
}

module.exports = anagrams;
