import { ReactElement } from "react";

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const redGo: object = {
  red: 9,
  blue: 8,
  assassin: 1,
  civilians: 7,
};

const blueGo: object = {
  red: 8,
  blue: 9,
  assassin: 1,
  civilians: 7,
};

const GameStates = () => {
  function StartingTeam() {
    const team: number = randomIntFromInterval(1, 2);

    if (team === 1) {
      const firstTurn = redGo;
      return console.log(firstTurn);
    } else {
      const firstTurn = blueGo;
      return console.log(firstTurn);
    }
  }

  StartingTeam();
};

export default GameStates;
