import { ReactElement } from "react";
import Card from "./Card";
import Arrays from "./WordsArrays";

const Row = (): ReactElement => {
  return (
    <div className="row">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Row;
