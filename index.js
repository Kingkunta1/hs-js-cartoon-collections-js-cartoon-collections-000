function dwarfRollCall(dwarves) { 
  let small = '' 
  for(let i = 0;i<dwarves.length; i++){
   
    
  small += `${i+1}. ${dwarves[i]} `
  
    //add our info to small
    
    
  } return small 
} 


function summonCaptainPlanet(planeteerCalls){
  var call =[]
  let i = 0 
 
  while (i<planeteerCalls.length){
    call.push(`${planeteerCalls[i].toUpperCase()}!`)
    i++
  }
  
 return call 
} 

function longPlaneteerCalls(words) {
for(let i = 0; i<words.length; i++)
  if(words[i].length<=4 ) { 
   return false}
    else{ 
     return true}
}


function findTheCheese (foods) {
 
  for( let i = 0; i<foods.length; i++){ 
  
  //debugger;
  if(foods[i] ===  'cheddar' || foods[i]=== 'gouda' || foods[i]=== 'camembert'){ 
    
    return foods[i]
   
    }
  } return 'no cheese!'
}
