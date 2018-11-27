function addElementToBeginningOfArray (array, element) {
  var newArray = [element, ...array]
  return newArray
}
function destructivelyAddElementToBeginningOfArray (array, element){
  var brokenNewArray = array.push(element)
  return brokenNewArray
}