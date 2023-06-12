function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function calculateScore(roll) {
  let score = 0;
  const counts = [0, 0, 0, 0, 0, 0];
  
  for (let i = 0; i < roll.length; i++) {
    const die = roll[i];
    counts[die - 1]++;
  }
  
  for (let i = 0; i < counts.length; i++) {
    const count = counts[i];
    
    if (count >= 3) {
      if (i === 0) {
        score += 1000;
        counts[i] -= 3;
      } else {
        score += (i + 1) * 100;
        counts[i] -= 3;
      }
    }
    
    if (i === 0 && count > 0) {
      score += count * 100;
    } else if (i === 4 && count > 0) {
      score += count * 50;
    }
  }
  
  if (counts.join('') === '111111') {
    score += 1500;
  }
  
  return score;
}

function playGame() {
  let totalScore = 0;
  
  while (totalScore < 10000) {
    const roll = [];
    
    for (let i = 0; i < 6; i++) {
      roll.push(rollDie());
    }
    
    const rollScore = calculateScore(roll);
    totalScore += rollScore;
    
    console.log('Roll:', roll, 'Score:', rollScore, 'Total Score:', totalScore);
  }
  
  console.log('You won the game, now get outta here!');
}

const rollButton = document.getElementById("roll-button")
rollButton.addEventListener("click", playGame)