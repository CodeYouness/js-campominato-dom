//<section class="tencell"></section>
//<section class="ninecell"></section>
//<section class="eightcell"></section>

const selectEl = document.querySelector('select')
const Grid = document.querySelector('.grid')
const playButton = document.querySelector('button')


playButton.addEventListener('click', function () {
    Grid.innerHTML = '';
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
