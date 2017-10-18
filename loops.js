function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i != 1) {
      array.push("I am ${i} strange loops.")
    }
    else {
      array.push("I am ${i} strange loop.")
    }
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n)
    n--
  }
  return "done"
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5 //returns boolean
  }
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue())
  return array
}
