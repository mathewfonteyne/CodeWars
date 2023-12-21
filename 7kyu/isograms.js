// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false


/// My Solution ///

function isIsogram(str){
  if (!str.match(/([a-z]).*\1/i)) {
    return true
  } else {
    return false
  }
  }

  console.log(isIsogram("tree"))
  console.log(isIsogram("arrow"))
  console.log(isIsogram("blade"))