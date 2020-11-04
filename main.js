const findInput = document.querySelector(".find-input");
const replaceInput = document.querySelector(".replace-input");
const replaceAllButton = document.querySelector(".replace-all-button");

const rowElements = document.querySelectorAll(".row");

function getCellElements(currentRowElement) {
  return currentRowElement.querySelectorAll(".cell");
}

replaceAllButton.addEventListener("click", function () {
  let userFindInput = findInput.value;
  let userReplaceInput = replaceInput.value;
  for (let i = 0; i < rowElements.length; i++) {
    let currentRowsCells = getCellElements(rowElements[i]);
    for (let j = 0; j < currentRowsCells.length; j++) {
      let cell = currentRowsCells[j].innerHTML;
      if (cell.includes(userFindInput)) {
        cell = cell.replace(userFindInput, userReplaceInput);
        currentRowsCells[j].innerHTML = cell;
      }
    }
  }
});
