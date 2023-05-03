// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    const map = new Map();

    let max = 0;
    let mostCommonChar;

    for (let char of str) {
        let qty = 0;

        if (map.has(char)) {
            qty = map.get(char) + 1;
        } else {
            qty = 1;
        }

        map.set(char, qty);

        if (qty > max) {
            max = qty;
            mostCommonChar = char;
        }
    }

    return mostCommonChar;
}
// O(n)

module.exports = maxChar;
