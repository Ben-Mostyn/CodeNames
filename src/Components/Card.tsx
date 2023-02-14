import { ReactElement, useState } from "react";
import Arrays from "./WordsArrays";

interface MyProps {
  gameArray: string[];
}

const Card = ({ gameArray }: MyProps): any => {
  //!States

  //!Arrays

  //Value for random number
  let value: number = -1;
  let newArray: string[] = [];
  const selectedIndices: number[] = [];

  // While newArray.length is less than 24, a random number is generated
  while (newArray.length < 25) {
    value = Math.floor(Math.random() * gameArray.length);
    if (!selectedIndices.includes(value)) {
      selectedIndices.push(value);
      newArray.push(gameArray[value]);
    }
    if (newArray.length === 25) {
      console.log(newArray, "this is new array /////");
    }
  }

  const removeElementsFromArray = (): void => {
    gameArray.slice(value, 1);
  };

  if (gameArray.length > 0) {
    removeElementsFromArray();
  }

  return (
    <div className="row">
      {newArray.length === 25
        ? newArray.map((item) => {
            return (
              <div className="card">
                <h1>{item}</h1>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Card;
