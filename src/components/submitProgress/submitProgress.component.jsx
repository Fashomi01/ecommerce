import React from "react";
import './submitProgress.styles.css'

const SubmitProgress = ({fullname}) => {
    return (
      <div className="progress">
        <div className="progress-box">
          <h1 className="progress-h1">Submit progress report {fullname}</h1>
          <p className="progress-p">
            Have you completed the activities for today?
          </p>
          <div className="round">
            <input type="radio" id="radio" className="round-input" />
            <label for="radio">
              I have listened to the message of today
            </label>{" "}
            <br />
            <input type="radio" className="round-input" />
            <label for="radio" id="radio">
              Have taken the affirmations and confessions of today
            </label>
          </div>
          <form action="" className="progress-form">
            <h2 className="progress-h2">Scriptures</h2>
            <textarea
              type="text"
              className="progress-form-input"
              placeholder="Enter verses of the scripture that directly addresses your situation today"
            />
          </form>
          <button className="progress-btn">Submit progress</button>
        </div>
      </div>
    );
}

export default SubmitProgress