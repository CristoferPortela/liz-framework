/* grid */

addEventListener('DOMContentLoaded',function () {

    let grid = document.querySelectorAll('.grid');
    let gridCol = document.querySelectorAll('.grid-column');
    console.log(grid);
    
    let auto = "auto ";
    for(let i=1; i < gridCol.length; i++){
        auto = auto + "auto ";
    }
    grid[0].style.gridTemplateColumns = auto;    
});
