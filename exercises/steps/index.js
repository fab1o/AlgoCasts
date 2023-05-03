// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {

    for (let i = 1; i <= n; i++) {
        
        let msg = '';
        
        for (let k = 1; k <= i; k++) {
            msg += '#';
        }
        
        for (let k = 1; k <= n - i; k++) {
            msg += ' ';
        }

        console.log(msg);
    }

}
// O(n^2)

function stepsRepeat(n, row = 0, step = '') {

    if (n === row) {
        return;
    }

    if (n === step.length) {
        console.log(step);

        stepsRepeat(n, ++row);
        return;
    }

    step += step.length <= row ? '#' : ' ';

    stepsRepeat(n, row, step);

}

// O(n^2)


module.exports = stepsRepeat;
