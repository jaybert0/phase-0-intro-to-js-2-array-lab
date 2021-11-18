// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield"
]

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const newCat = [...cats, name];
    return newCat
    
}

function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats
}

function removeLastCat() {
    const sliceCat = cats.slice(0, -1);
    return sliceCat
}

function removeFirstCat() {
    const removeFirst = cats.slice(1)
    return removeFirst
}