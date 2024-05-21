const selectEl = document.querySelector('select')
const Grid = document.querySelector('.grid')
const playButton = document.querySelector('button')
const scoreShow = document.querySelector('#points')
let numberBlacklist = []
let gameOver = false
let scoreCounter = 0


playButton.addEventListener('click', function () {
    Grid.innerHTML = '';
    gameOver = false
    scoreCounter = 0
    scoreShow.innerHTML = 0
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
    const domEl = []
    for (let i = 1; i <= max; i++) {
        const cell = document.createElement('section')

        cell.classList.add(measures)
        cell.append(i)
        Grid.appendChild(cell)
        if (numberBlacklist.includes(i)) {
            domEl.push(cell)
        }
        cell.addEventListener('click', function () {
            if (!gameOver) {
                if (numberBlacklist.includes(i)) {
                    for (let k = 0; k < 15; k++) {
                        domEl[k].classList.add('bg_red');
                    }
                    alert('You lose!' + ' Your score is: ' + scoreCounter)
                    gameOver = true;
                } else if (!cell.classList.contains('bg_blue')) {
                    cell.classList.add('bg_blue');
                    scoreCounter++
                    scoreShow.innerHTML = scoreCounter
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
