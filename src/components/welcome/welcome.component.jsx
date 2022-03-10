import React from "react";
import "./welcome.styles.css";
// import welcomelogo from "../../assets/icons/welcome-logo.pdf";

const Welcome = ({fullname}) => {
  return (
    <div className="welcome">
      <div className="welcome-box">
        <h1>🎉</h1>
        <h2 className="welcome-h2">Welcome to the challenge{fullname}</h2>
        <h3 className="welcome-h3">HOW TO PREPARE FOR THE CHALLENGE </h3>
        <p className="welcome-p">
          During this challenge, you will carry out several activities, such as
          listening to specially-chosen messages by Pastor Chris, having some
          times of intense prayer and fasting, worshipping and praising God for
          the answers to prayers, talking sessions, and visualization exercises
          to boost your faith as you will require it during the challenge.{" "}
        </p>
        <button className="welcome-btn">My Challenge</button>
      </div>
    </div>
  );
};

export default Welcome;
