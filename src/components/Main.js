import React from "react";
import Profile from "../images/Hedgehog_Hair.png";
import Card from "./Card";
import { AiFillMail } from "react-icons/ai";
const Main = () => {
  return (
    <div className="main--box">
      <img src={Profile} className="main--profile-image" />
      <h1 className="main--title">Ace</h1>
      <h2 className="main--subtitle">Solidity/Web3 Developer</h2>

      <button
        className="main--email-btn"
        onClick={() => (window.location = "mailto:ace.jsmith1@gmail.com")}
      >
        <AiFillMail className="main--email-btn-icon" />
        <h5>Email</h5>
      </button>
      <h3 className="main--header">About</h3>
      <p className="main--text">
        Hey I am Ace, I have over 2 years of experience with Solidity and
        building DApps. I work with Hardhat for production and Remix IDE for
        prototyping and like to test my code with Hardhat Unit testing
        framework. I prefer Ethers.js for frontend integration of contracts. I
        have worked with 10+ projects, deploying smart contracts on various EVM
        chain and can actively lead the team as well.
      </p>
      <h3 className="main--header">Skills</h3>
      <div className="card--box">
        <Card
          header="Solidity"
          content="Worked with 10+ projects and deployed 60+ production contracts. Proficient with OpenZeppelin library and hardhat testing framework."
        />
        <Card
          header="Unity Engine"
          content="Worked on multiple hypercasual games as Unity developer, focusing on game logic and UI."
        />
        <Card
          header="Discord Bots"
          content="Worked on discord bots that cover variety of features, including token gating channels, auth, notifications and more."
        />
      </div>
    </div>
  );
};

export default Main;
