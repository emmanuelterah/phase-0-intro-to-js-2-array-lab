// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"]

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

/////
function destructivelyAppendCat () {
    cats.push("Ralph")
}
console.log(destructivelyAppendCat())


/////
function destructivelyPrependCat () {
    cats.unshift("Bob")
}
console.log(destructivelyPrependCat())



///
function destructivelyRemoveLastCat () {
    cats.pop("Garfield")
}
console.log(destructivelyRemoveLastCat())

///
function destructivelyRemoveFirstCat() {
    cats.shift("Milo")
}
console.log(destructivelyRemoveFirstCat())

/////

function appendCat () {
    cats = ["Milo", "Otis", "Garfield"]
    const newCat1 = "Broom"
    const newCat = cats.concat(newCat1)
    return newCat;
}
console.log(appendCat())

//////
function prependCat () {
    let prependedCats = ["Arnold","Milo","Otis","Garfield"]
    prependedCats.splice(0,0,)
    return prependedCats;
    
}
console.log(prependCat())

///////
function removeLastCat() {
    let lastCats = ["Milo","Otis"]
    lastCats.splice(2,0,)
    return lastCats;
}
console.log(removeLastCat())

///////
function removeFirstCat () {
    let firstCats = ["Otis", "Garfield"]
    firstCats.splice(0,0,)
    return firstCats;
}
console.log((removeFirstCat))