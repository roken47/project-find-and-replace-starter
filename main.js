// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input");
const replaceInput = document.querySelector(".replace-input");
const replaceAllButton = document.querySelector(".replace-all-button");

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row");

// When you call the function below, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen?
function getCellElements(currentRowElement) {
  return currentRowElement.querySelectorAll(".cell");
}

// YOUR CODE GOES HERE
replaceAllButton.addEventListener("click", function () {
  //TODO get the value from the inputs
  let userFindInput = findInput.value;
  let userReplaceInput = replaceInput.value;
  for (let i = 0, currentRow = rowElements.length; i < currentRow; i++) {
    // loop over each row to find user's input --> maybe .include()
    // nest the loops to also go over each cell

    console.log(currentRow[i]);
    for (let j = 0, currentCell = currentRow[i]; j < currentCell; j++) {
      //! need to understand how above function will return currentCell
      //loop over current row to search each cell of current row to see if it includes(userFindInput) then replace(userReplaceInput)
      getCellElements(rowElements[i][j]);
      console.log(currentCell[j]);
    }
    // if(rowElements.includes(userFindInput)) {
    //     let currentRow = rowElements[i];

    // }
  }
  //TODO loop over rowElements
  //TODO currentSomething = getCellElements(somethings[i])
  //TODO loop currentSomething
  //? includes() method
  //? replace() method
});
// /*! //! outer loop applies to outer array
let ar = [
  ["test1", 2, "test2", 3],
  [8, 4, 6, 7],
  ["dude", "what's", "mine", "say"],
];

for (var i = 0, len = ar.length; i < len; i++) {
  //! inner loop applies to sub-arrays
  for (var j = 0, len2 = ar[i].length; j < len2; j++) {
    //! accesses each element of each sub-array in turn
    console.log(ar[i][j]);
  }
}

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
