import { ReactElement, SetStateAction, useState } from "react";
import "./App.css";
import Grid from "./Grid";
import GameStates from "./SecretCard";
import { numbers, letters, sampleWords } from "./WordsArrays";

const App = (): ReactElement => {
  //!states

  const [gameArray, setGameArray] = useState<string[]>([]);

  const [colourChangeBoolean, setColourChangeBoolean] = useState<
    boolean | null
  >(null);

  //False = team 1, true = team 2
  const [teamChange, setTeamChange] = useState<boolean>(false);

  //False = blue team goes first
  const [firstTurn, setFirstTurn] = useState<boolean | null>(false);

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

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value);
    setGameArray([]);
  };

  // populate the array used for the game

  const populateGameArray = (e: any): any => {
    e.preventDefault();
    if (gameArray.length < 1) {
      setGameArray(selectedArray);
    }
  };

  function h1ColorChange() {
    if (firstTurn) {
      setFirstTurn(false);
    } else {
      setFirstTurn(true);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {firstTurn ? (
          <h1 className="red">CodeNames</h1>
        ) : (
          <h1 className="blue">CodeNames</h1>
        )}
      </header>
      <select
        value={selectedOption}
        defaultValue="option1"
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <section className="playArea">
        <button onClick={populateGameArray}>Start Game</button>
        {gameArray.length < 1 ? null : <Grid gameArray={gameArray} />}
        <button
          onClick={() => {
            GameStates();
            h1ColorChange();
          }}
        >
          Test
        </button>
      </section>
    </div>
  );
};

export default App;
