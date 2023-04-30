// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = [];
    let subArray = [];

    for (let item of array) {
        if (subArray.length == size) {
            chunked.push(subArray);
            subArray = [];
        }
        subArray.push(item);
    }
    chunked.push(subArray);

    return chunked;
}

function chunkWithSlice(array, size) {
    const chunked = [];

    while(array.length > 0) {
        chunked.push(array.splice(0, size));
    }

    return chunked;
}

module.exports = chunkWithSlice;
