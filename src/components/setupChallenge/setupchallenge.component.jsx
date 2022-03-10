import React from "react";
import './setupChallenge.styles.css'
import calenderIcon from '../../assets/icons/calender-icon1.png'

const SetupChallenge = () => {
    return (
      <div className="setup-challenge">
        <div className="setup-challenge-box">
          <div className="setup-challenge-h1">Complete Setup</div>
          <form action="" className="setup-form">
            <h2 className="setup-challenge-h2">Desired Outcome</h2>
            <textarea
              type="text"
              className="setup-form-input"
              placeholder="Your dream or goal that you want to achieve or see changes in the
              categories selected"
            />
          </form>
          <div className="setup-submit">
            <button className="setup-btn">Start Now</button>
            <span className="setup-span">OR</span>
            <button className="setup-btn-2" disabled>
              <img
                src={calenderIcon}
                alt="calender icon"
                className="calender-icon"
              />
              Start Later
            </button>
          </div>
        </div>
      </div>
    );
}

export default SetupChallenge