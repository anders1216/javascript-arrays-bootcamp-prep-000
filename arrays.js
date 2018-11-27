var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (array, element) {
  var newArray = [...array];
  newArray.unshift(element)
  return newArray
}

function destructivelyAddElementToBeginningOfArray (array, element){
  var brokenNewArray = array;
  brokenNewArray.unshift(element);
  return brokenNewArray
}

function addElementToEndOfArray(array, element){
  var newArray = [...array, element];
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element){
  var brokenNewArray = array.push(element);
  return brokenNewArray
}

function accessElementInArray (array, index){
  
}

function destructivelyRemoveElementFromBeginningOfArray (array){
  
}

function removeElementFromBeginningOfArray(array) {
  
}

function destructivelyRemoveElementFromEndOfArray(array){
  
}
function removeElementFromEndOfArray(array) {
  
}
