import { ReactElement } from "react";
import Card from "./Card";

interface MyProps {
  gameArray: string[];
}

const Grid = ({ gameArray }: MyProps): ReactElement => {
  return (
    <div className="grid">
      <div className="row">
        <Card gameArray={gameArray} />
      </div>
    </div>
  );
};

export default Grid;
