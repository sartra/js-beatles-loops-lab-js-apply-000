function theBeatlesPlay(musicians, instruments) {
  const arr = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arr
}


function johnLennonFacts(facts) {
  var shoutedFacts = [];
  var i=0;
  while (i < facts.length) {
    shoutedFacts.push (`${facts[i]}!!!`);
  }
  return shoutedFacts;
}

//
// function iLoveTheBeatles(num) {
//   const arr = [];
//   do {
//     arr.push('I love the Beatles!')
//     num++;
//   }
//   while (num<15);
//
//   return arr;
// }
