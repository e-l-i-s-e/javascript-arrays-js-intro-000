var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

// function addElementToBeginningOfArray(array, element){
//   return [element, ...array];
// }

var addElementToBeginningOfArray = (array, element) => [element, ...array]

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array;
}

// function addElementToEndOfArray(array, element) {
//   var newArray = array;
//   newArray.push(element);
//   return newArray;
// }

var addElementToEndOfArray = (array, element) => [...array, element]

// function destructivelyAddElementToEndOfArray(array, element) {
//   array.push(element);
//   return array;
// }

var destructivelyAddElementToEndOfArray = (array, element) => {
  array.push(element)
  return array}

function accessElementInArray (array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.slice(1)
}

function removeElementFromBeginningOfArray(array){
  var newArray = array
  newArray.slice(1);
  return newArray;
}

function destructivelyAddElementToEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  var newArray = array
  newArray.slice(0, newArray.length - 1)
  return newArray;
}
