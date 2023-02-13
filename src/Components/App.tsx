import { FC, ReactElement, useState } from "react";
import "./App.css";
import Grid from "./Grid";

const App = (): ReactElement => {
  //!states

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

  return (
    <div className="App">
      <header className="App-header">
        <h1>CodeNames</h1>
      </header>
      <section className="playArea">
        <Grid />
      </section>
    </div>
  );
};

export default App;
