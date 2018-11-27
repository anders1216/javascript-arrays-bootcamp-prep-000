var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (array, element) {
  var newArray = [...array];
  newArray.unshift(element)
  return newArray
}

function destructivelyAddElementToBeginningOfArray (array, element){
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element){
  var newArray = [...array, element];
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array

}

function accessElementInArray (array, index){
  return (array[index])
}

function destructivelyRemoveElementFromBeginningOfArray (array){
  return array.shift()
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
 return array.shift(-1)
}
function removeElementFromEndOfArray(array) {
  return array.slice(-1)
}
