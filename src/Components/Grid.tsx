import { ReactElement } from "react";
import Card from "./Card";
import Row from "./Row";

interface MyProps {
  gameArray: string[];
}

const Grid = ({ gameArray }: MyProps): ReactElement => {
  return (
    <div className="grid">
      {/* <Row gameArray={gameArray} />
      <Row gameArray={gameArray} />
      <Row gameArray={gameArray} />
      <Row gameArray={gameArray} />
      <Row gameArray={gameArray} /> */}
      <div className="row">
        <Card gameArray={gameArray} />
      </div>
    </div>
  );
};

export default Grid;
