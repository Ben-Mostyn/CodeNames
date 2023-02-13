import { ReactElement, useState } from "react";
import Arrays from "./WordsArrays";

const Card = (): any => {
  //!States

  const [gameArray, setGameArray] = useState<string[] | any>([]);
  const [items, setItems] = useState<number>(0);

  let item = Arrays.numbers[Math.floor(Math.random() * Arrays.numbers.length)];

  // console.log(gameArray);

  // for (let i = 0; i < 25; i++) {
  //   gameArray.push(Arrays.numbers[i]);
  //   setItems(items + 1);
  // }

  return (
    <div className="card">
      <h1 className="red">{item}</h1>
    </div>
  );
};

export default Card;
