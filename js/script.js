//<section class="tencell"></section>
//<section class="ninecell"></section>
//<section class="eightcell"></section>

const selectEl = document.querySelector('select')
const Grid = document.querySelector('.grid')
const playButton = document.querySelector('button')
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
    for (let i = 1; i <= max; i++) {
        const cell = document.createElement('section')
        cell.classList.add(measures)
        cell.append(i)
        Grid.appendChild(cell)
        cell.addEventListener('click', function () {
            cell.classList.toggle('bg_blue')
            console.log(i)
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

for (let i = 0; i <= 16; i++) {
    numberBlacklist += getUniqueInt('', 1, 100);
}
