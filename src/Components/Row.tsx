import { ReactElement } from "react";
import Card from "./Card";
import Arrays from "./WordsArrays";

interface MyProps {
  gameArray: string[];
}

const Row = ({ gameArray }: MyProps): ReactElement => {
  return (
    <div className="row">
      {/* <Card gameArray={gameArray} />
      <Card gameArray={gameArray} />
      <Card gameArray={gameArray} />
      <Card gameArray={gameArray} /> */}
    </div>
  );
};

export default Row;
