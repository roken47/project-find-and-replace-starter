// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input");
const replaceInput = document.querySelector(".replace-input");
const replaceAllButton = document.querySelector(".replace-all-button");

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row");
// var rowArray = Array.from(rowElements);
// console.log(rowArray[0]);
// When you call the function below, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen?
function getCellElements(currentRowElement) {
  return currentRowElement.querySelectorAll(".cell");
}

replaceAllButton.addEventListener("click", function () {
  let userFindInput = findInput.value;
  let userReplaceInput = replaceInput.value;
  for (let i = 0; i < rowElements.length; i++) {
    // loop over each row to find user's input --> maybe .include()
    // nest the loops to also go over each cell
    let currentRowsCells = getCellElements(rowElements[i]);
    // console.log("ROW: " + currentRowsCells);
    for (let j = 0; j < currentRowsCells.length; j++) {
      // console.log("CELLS: " + currentRowsCells[j]);
      //TODO includes(valueToFind, [optional]fromIndex)
      //TODO replace(oldText/regEx, newText/pattern)
      //! Can't use currentRowsCells because it is tied to function: returns error. Hint:tictactoe project ---> Byron suggests reserved wprd 'this'
      // if (arr.includes(currentRowsCells[j])) {
      //   let replacement = currentRowsCells[j].innerHTML;
      //   replacement.replace(userFindInput, userReplaceInput);
      //   currentRowsCells[j].innerHTML = replacement;
      //   console.log(replacement);
      // }
    }
  }
});
//loop over current row to search each cell of current row to see if it includes(userFindInput) then replace(userReplaceInput)
//TODO loop over rowElements
//TODO currentSomething = getCellElements(somethings[i])
//TODO loop currentSomething
//? includes() method
//? replace() method

// /*! //! outer loop applies to outer array
// let ar = [
//   ["test1", 2, "test2", 3],
//   [8, 4, 6, 7],
//   ["dude", "what's", "mine", "say"],
// ];

// for (var i = 0, len = ar.length; i < len; i++) {
//   //! inner loop applies to sub-arrays
//   for (var j = 0, len2 = ar[i].length; j < len2; j++) {
//     //! accesses each element of each sub-array in turn
//     // console.log(ar[i][j]);
//   }
// }

// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
