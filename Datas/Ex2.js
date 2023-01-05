const worldCupFinal = new Date(2002, 5, 30, 8);
const worldCupFinalTimestamp = +worldCupFinal;
const firstScoreTimestamp = worldCupFinalTimestamp + 82 * 60 * 1000;
const secondScoreTimeStamp = firstScoreTimestamp + 12 * 60 * 1000;
const firstScore = new Date(firstScoreTimestamp);
const secondScore = new Date(secondScoreTimeStamp);


console.log(firstScore, secondScore);