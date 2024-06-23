import React from "react";
import HomeLandingContainer from "./HomeLandingContainer";
import CardBelowHome from "./CardBelowHome";
import PlanningToAdoptAPet from "./PlanningToAdoptAPet";

const Home = (props) => {
  return (
    <>
      <HomeLandingContainer description={props.description} />
      <CardBelowHome />
      <PlanningToAdoptAPet />
    </>
  );
};

export default Home;
