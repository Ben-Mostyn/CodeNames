import { FC, ReactElement, useState } from "react";
import "./App.css";
import Grid from "./Grid";
import Arrays from "./WordsArrays";

const App = (): ReactElement => {
  //!states

  const [gameArray, setGameArray] = useState<string[]>([]);

  // Planning on passing colourchange and teamchange to the card component
  //In the card component im thinking we have a condition like this:
  //If team change is false and color change is false, turn red
  // if team change is true, and color change is true change to blue
  // For now im thinking we have a change team button which alters the teamchange state
  //This way, we can do if(teamChange){setColourChangeBoolean(true)}
  //if(!teamChange){setColorChangeBoolean(false)}
  //This ensures that the red team can only change to red and blue team, blue etc
  //Having one state means the red team would switch between red and blue etc
  const [colourChangeBoolean, setColourChangeBoolean] = useState<
    boolean | null
  >(null);

  //False = team 1, true = team 2
  const [teamChange, setTeamChange] = useState<boolean>(false);

  //!Functions

  const populateGameArray = (e: any): any => {
    e.preventDefault();
    setGameArray(Arrays.numbers);
  };

  // Console.log can be deleted when working
  // if (gameArray.length > 0) {
  //   console.log(gameArray);
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h1>CodeNames</h1>
      </header>
      <section className="playArea">
        <button onClick={populateGameArray}>Start Game</button>
        {gameArray.length < 1 ? null : <Grid gameArray={gameArray} />}
      </section>
    </div>
  );
};

export default App;
