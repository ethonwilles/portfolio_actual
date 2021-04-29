import React from "react";

const CompExp = () => {
  const rivnLogo = "https://static.rivn.com/images/rivn_blue_background.svg";
  return (
    <div className="edu-content exp-rivn">
      <div className="bottega-img">
        <a href="https://rivn.com" target="_blank" rel="noopener noreferrer">
          <img src={rivnLogo} alt="RIVN Logo" />
        </a>
      </div>

      <div className="work-desc">
        <p>November 2019 - July 2020</p>
        <h1>Python Developer</h1>
      </div>
    </div>
  );
};
export default CompExp;
