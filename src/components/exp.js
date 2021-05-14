import React from "react";

import CompExp from "./exp-comp/comp-exp";
import Projects from "./exp-comp/projects";
import BackBar from "./backBar";
const Exp = () => {
  const [check, setCheck] = React.useState(true);
  return (
    <div className="exp">
      <BackBar />
    </div>
  );
};
export default Exp;
