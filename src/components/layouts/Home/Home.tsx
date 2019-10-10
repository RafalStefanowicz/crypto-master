import React from "react";

import { ForwardButtonLogic } from "../../ForwardButton/ForwardButtonLogic";
import GameGoals from "./GameGoals/GameGoals";

const Home = () => {
  return (
    <>
      <GameGoals />
      <ForwardButtonLogic />
    </>
  );
};

export default Home;
