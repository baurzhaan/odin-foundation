function addDivs(sizeOfGameBoard = 16, container) {
  let fullGameBoardSize = sizeOfGameBoard * sizeOfGameBoard;
  for (let i = 0; i < fullGameBoardSize; i++) {
    let div = document.createElement("div");
    div.className = "div_cell";
    container.append(div);
  };

  let div_cells = document.getElementsByClassName("div_cell");
  for (div_cell of div_cells) {
    div_cell.style.aspectRatio = "1/1";
    div_cell.style.width = "100%";
    div_cell.style.height = "100%";
    div_cell.style.boxSizing = "border-box";
    div_cell.style.border = "1px solid gray";
    div_cell.style.width = `${100 / sizeOfGameBoard}%`;
    div_cell.addEventListener("mouseover", function() {
      this.style.backgroundColor = "blue";
    });
  };
};

let sizeOfGameBoard = 16;

const btnSetsizeOfGameBoard = document.createElement("button");
btnSetsizeOfGameBoard.textContent = "Set size of game board (< 100)";
btnSetsizeOfGameBoard.style.backgroundColor = "yellow";
btnSetsizeOfGameBoard.style.margin = "10px";
btnSetsizeOfGameBoard.style.fontSize = "20px";

btnSetsizeOfGameBoard.addEventListener("click", function(){
  sizeOfGameBoard = prompt("Enter number of squares", 16);
  if (sizeOfGameBoard > 100) sizeOfGameBoard = 100;
  if (typeof(sizeOfGameBoard) == 'string') {
    container.replaceChildren();
    addDivs(sizeOfGameBoard, container);
  };
});

document.body.prepend(btnSetsizeOfGameBoard);

container = document.getElementById("container");
container.style.display = "flex";
container.style.flexFlow = "row wrap";
container.style.justifyContent = "space-around";
container.style.textAlign = "center";

addDivs(sizeOfGameBoard, container);