//<section class="tencell"></section>
//<section class="ninecell"></section>
//<section class="eightcell"></section>

const selectEl = document.querySelector('select')
const Grid = document.querySelector('.grid')
const playButton = document.querySelector('button')
const score = document.querySelector('#points')
let numberBlacklist = []
let gameOver = false


playButton.addEventListener('click', function () {
    Grid.innerHTML = '';
    gameOver = false
    const selectValue = selectEl.value
    if (selectValue === 'easy') {
        generateGrid(100, 'tencell')
    } else if (selectValue === 'hard') {
        generateGrid(81, 'ninecell')
    } else if (selectValue === 'crazy') {
        generateGrid(49, 'sevencell')
    }
})


/**
 * 
 * @param {*} max maximum number of cell
 * @param {*} measures class for the width and height of every cell 
 */
function generateGrid(max, measures) {
    numberBlacklist = []
    for (let i = 0; i < 16; i++) {
        numberBlacklist.push(getUniqueInt(numberBlacklist, 1, max))
    }

    for (let i = 1; i <= max; i++) {
        const cell = document.createElement('section')
        cell.classList.add(measures)
        cell.append(i)
        Grid.appendChild(cell)
        cell.addEventListener('click', function () {
            if (!gameOver) {
                if (numberBlacklist.includes(i)) {
                    cell.classList.add('bg_red');
                    alert('You lose!')
                    gameOver = true;
                } else {
                    cell.classList.add('bg_blue');
                }
            }
        })
    }
}

function generateNumberInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getUniqueInt(blacklist, min, max) {
    let randomNumber;
    let isFound = false;

    while (!isFound) {
        randomNumber = generateNumberInt(min, max);
        if (!blacklist.includes(randomNumber)) {
            isFound = true;
        }
    }

    return randomNumber;
}
