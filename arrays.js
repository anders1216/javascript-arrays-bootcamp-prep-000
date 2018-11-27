var cholocateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (array, element) {
  var newArray = [element, ...array]
  return newArray
}
function destructivelyAddElementToBeginningOfArray (array, element){
  var brokenNewArray = array.push(element)
  brokenNewArray.unshift(element)
  return brokenNewArray
}