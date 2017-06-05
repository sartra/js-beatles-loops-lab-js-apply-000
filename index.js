function theBeatlesPlay(musicians, instruments) {
  const arr = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arr
}


function johnLennonFacts (facts) {
  var shoutedFacts = [];
  var i=0;
  while (i < facts.length) {
    shoutedFacts.push (`${facts[i]}!!!`);
  }
  return shoutedFacts;
}

//The body of the function should create a variable that stores an empty array. Then, implement a do-while loop inside the function that adds "I love the Beatles!" to the empty array. Then the loop should increment the number passed in as a parameter. The condition of the loop should check to see that the parameter number is less than 15. The function should return the array with the strings "I love the Beatles!".
function iLoveTheBeatles(num) {
  const arr = [];
  do {
    arr.push('I love the Beatles!')
    num++;
  } 
  while (num<15);

  return arr; 
}