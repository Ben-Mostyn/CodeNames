import { ReactElement } from "react";
import Row from "./Row";

const Grid = (): ReactElement => {
  return (
    <div className="grid">
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
    </div>
  );
};

export default Grid;
