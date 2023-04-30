// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#' 1 = 1 + 0
//   pyramid(2)
//       ' # '
//       '###' 3 = 2 + 1
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####' 5 = 3 + 2
//   pyramid(4)
//       '   #   ' 
//       '  ###  '
//       ' ##### '
//       '#######' 7 = 4 + 3
//   pyramid(5)
//       '    #    '
//       '   ###   '
//       '  #####  '
//       ' ####### '
//       '#########' 9 = 5 + 4
//   pyramid(6)
//       '     #     ' row = 1, col = 6
//       '    ###    ' row = 2, col = 5,6,7
//       '   #####   ' row = 3, col = 4,5,6,7,8 empty_spaces = (size - rowSize) / 2
//       '  #######  ' 
//       ' ######### ' 
//       '###########' 11 = 6 + 5

function pyramid(n, row = 1, step = '') {

    if (n === 0) {
        return;
    }

    if (row > n) {
        return;
    }

    const size = n + (n - 1);

    if (step.length === size) {
        console.log(step);
        pyramid(n, ++row);
        return;
    }

    const rowSize = row + (row - 1);

    if (size > rowSize &&
        (
            (step.length < (size - rowSize) / 2) ||
            (step.length >= ((size - rowSize) / 2) + rowSize)
        )
    ) {
        step += ' ';
    } else {
        step += '#';
    }

    pyramid(n, row, step);

}

module.exports = pyramid;
