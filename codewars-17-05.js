//Grasshopper - Messi goals function
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals+copaDelReyGoals+championsLeagueGoals;
}

//Return Negative
function makeNegative(num) {
  if (num === 0) {
    return 0;
  }
  if (num > 0) {
    return num-num-num;
  }
  if (num < 0) {
    return num;
  }
}

//Grasshopper - Terminal game move function
function move (position, roll) {
  return position + roll+ roll;
}

//Grasshopper - Personalized Message
function greet (name, owner) {
  if (name === owner) {
    return 'Hello boss';
  }
  return 'Hello guest';
}

//Keep Hydrated!
function litres(time) {
  return Math.floor(time*0.5);
}

//Opposites Attract
function lovefunc(flower1, flower2){
  let flower1Check = flower1%2;
  let flower2Check = flower2%2;
  return (flower1Check === 0 && flower2Check != 0) || (flower1Check != 0 && flower2Check === 0);
}
