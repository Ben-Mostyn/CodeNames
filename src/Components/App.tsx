import { ReactElement, SetStateAction, useState } from "react";
import "./App.css";
import Grid from "./Grid";
import {numbers, letters, sampleWords} from "./WordsArrays";

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


  const [selectedOption, setSelectedOption] = useState("option1");
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const arrays: any = {
    option1: numbers,
    option2: letters,
    option3: sampleWords,
  };

  // Get the selected array based on the selected option
  let selectedArray: any = arrays[selectedOption];

  // Handle the dropdown selection change
  
  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedOption(event.target.value);
  };


// populate the array used for the game

  const populateGameArray = (e: any): any => {
    e.preventDefault();
    setGameArray(selectedArray);
  };





  return (
    <div className="App">
      <header className="App-header">
        <h1>CodeNames</h1>
      </header>
      <select value={selectedOption} defaultValue="option1" onChange={handleChange} >

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}

      </select>
      <section className="playArea">
        <button onClick={populateGameArray}>Start Game</button>
        {gameArray.length < 1 ? null : <Grid gameArray={gameArray} />}
      </section>
    </div>
  );
};

export default App;
