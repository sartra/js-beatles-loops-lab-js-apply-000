
function theBeatlesPlay (musicians, intstruments){
  var arr = [];
  for(var i=0; i<musicians.length; i++){
     arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr; 
}

