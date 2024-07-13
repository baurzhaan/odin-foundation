let noOfSquares = 16;


const btnSetNoOfSquares = document.createElement("button");
btnSetNoOfSquares.textContent = "Set Number of squares";
btnSetNoOfSquares.id = "btnSetNoOfSquares";

btnSetNoOfSquares.addEventListener("click", function(){
  noOfSquares = prompt("Enter number of squares", noOfSquares);
});

document.body.prepend(btnSetNoOfSquares);

container = document.getElementById("container");

container.style.display = "flex";
container.style.flexFlow = "row wrap";
container.style.justifyContent = "space-around";
container.style.textAlign = "center";

let gameBoardSize = noOfSquares * noOfSquares;
for (let i = 0; i < gameBoardSize; i++) {
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
  div_cell.style.width = `${100 / noOfSquares}%`;
  // div_cell.onmouseover = function() {
  //     this.style.backgroundColor = "blue";
  // };
  div_cell.addEventListener("mouseover", function() {
    this.style.backgroundColor = "blue"
  });
};