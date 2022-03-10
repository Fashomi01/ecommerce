import React from "react";
import "./homepage.styles.css";
import secondBoxImage from "../../assets/img/manThinking.png";
import thirdBoxImage from "../../assets/img/thirdbox.png";
import fifthBoxImage from "../../assets/img/fifthboximg.png";
import facebookIcon from "../../assets/img/facebookIcon.png";
import twitterIcon from "../../assets/img/twitterIcon.png";
import instagramIcon from "../../assets/img/instagramIcon.png";

const Homepage = () => (
  <div className="homepage-container">
    <div className="first-box">
      <div className="first-box-content">
        <h1 className="first-box-h1">Change anything in 21 Days</h1>
        <p className="first-box-p">
          Build your faith strong for a change while
          <span style={{ display: "block" }}>
            following trackable faith-based goals
          </span>
        </p>
        <button className="first-box-btn">Join the challenge now</button>
        <div className="first-box-slide">
          <a href="">Previous &#8226;</a>
          <a href="">Next</a>
        </div>
      </div>
    </div>

    <div className="second-box">
      <h1 className="second-box-h1">Why take a challenge?</h1>
      <div className="second-box-content">
        <p className="second-box-p">
          You’ve probably seen people daring or “challenging” some other persons
          on social media for fun, popularity contest or simply to trend.
          <span style={{ display: "block", margin: "2rem 0" }}>
            Today, the Lord wants you to get in on His own kind of challenge—a
            <span style={{ fontWeight: "700" }}> 21-day challenge</span> —in
            which you can literally and dramatically change the circumstances of
            your life forever.
          </span>
          21 Day Challenge is a challenge where you recreate your entire world
          and status quo in 21 days or less from the comfort of your device
        </p>
        <img
          src={secondBoxImage}
          alt="Man Thinking"
          className="second-box-img"
        />
      </div>
      <button className="second-box-btn">Get Started Now</button>
    </div>

    <div className="third-box" id="how-it-works">
      <h1 className="third-box-h1">How it works</h1>
      <div className="third-box-content">
        <img src={thirdBoxImage} alt="" className="third-box-img" />
        <div className="third-box-content-2">
          <div className="homepage_row-3_each">
            <h2 className="third-box-h2">1.</h2>

            <div className="homepage_row-3_subeach">
              <h3 id="third-box-h3">Create challenge</h3>
              <p>Create your challenge, select from a list of categories</p>
            </div>
          </div>

          <div className="homepage_row-3_each">
            <h2 className="third-box-h2">2.</h2>

            <div className="homepage_row-3_subeach">
              <h3 id="third-box-h3">Take daily activities </h3>
              <p>
                Participate on dialy activities, listen to messages, take
                affrimations and more
              </p>
            </div>
          </div>

          <div className="homepage_row-3_each">
            <h2 className="third-box-h2">3.</h2>

            <div className="homepage_row-3_subeach">
              <h3 id="third-box-h3">Finish your challenge!</h3>
              <p>
                Keep track of your challenge and get a certificate on
                completion!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="fourth-box">
      <h1 className="fourth-box-h1">Numbers speaks</h1>
      <div className="fourth-box-content">
        <span>
          <h2 className="fourth-box-content-h2">12K</h2>
          <p className="fourth-box-content-p">Users accounts</p>
        </span>
        <span>
          <h2 className="fourth-box-content-h2">100K</h2>
          <p className="fourth-box-content-p">Challenges created</p>
        </span>
        <span>
          <h2 className="fourth-box-content-h2">20k</h2>
          <p className="fourth-box-content-p">Completed challenges</p>
        </span>
      </div>
    </div>

    <div className="fifth-box">
      <div className="fifth-box-content">
        <div className="fifth-box-content-1">
          <h1 className="fifth-box-content-h1">
            It’s your time for a challenge!
          </h1>
          <p className="fifth-box-content-p">
            Jesus said to him,
            <span style={{ fontWeight: "600" }}>
              <i>
                "If you can believe, all things are possible to him who
                believes.”
              </i>
            </span>
            <span style={{ display: "block", marginTop: "1rem" }}>
              (Mark 9:23 New King James Version).
            </span>
          </p>
          <button className="fifth-box-btn">Join Now</button>
        </div>
        <img src={fifthBoxImage} alt="" className="fifth-box-img" />
      </div>
    </div>

    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-1">
          <div className="language-option">
            <select name="" id="" className="select_language">
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="German">German</option>
            </select>
          </div>
          <div className="footer-content-1-socials">
            <a href="#">
              <img src={twitterIcon} alt="" />
            </a>
            <a href="#">
              <img src={facebookIcon} alt="" />
            </a>
            <a href="#">
              <img src={instagramIcon} alt="" />
            </a>
          </div>
        </div>

        <div className="footer-content-2">
          <h1 className="footer-content-h1">Contact</h1>
          <h2 className="footer-content-h2">United Kingdom</h2>
          <p className="footer-content-p">
            Unit C2, Thames View Business. Centre, Barlow Way Rainham. Essex,
            RM13 8BT
          </p>
          <h2 className="footer-content-h2">South Africa</h2>
          <p className="footer-content-p">
            303 Pretoria Avenue, Cnr. Harley and Braam Fischer, Randburg,
            Gauteng 2194, South Africa.
          </p>
          <h2 className="footer-content-h2">Nigeria Office</h2>
          <p className="footer-content-p">
            Plot 22/23 Billingsway Road, Oregun, Ikeja, Lagos P.O. Box 13563
            Ikeja, Lagos
          </p>
        </div>

        <div className="footer-content-2">
          <h1 className="footer-content-h1">Support</h1>
          <h2 className="footer-content-h2">Email Address</h2>
          <p className="footer-content-p">info@recreatingyourworld.org</p>
          <h3 className="footer-content-h3">
            Nigeria:
            <span style={{ fontWeight: "400" }}> +234 906 336 1553</span>
          </h3>
          <h3 className="footer-content-h3">
            South Africa:
            <span style={{ fontWeight: "400" }}> +27 11 326 0971</span>
          </h3>
          <h3 className="footer-content-h3">
            U.S.A: <span style={{ fontWeight: "400" }}> +1 (800) 620-8522</span>
          </h3>
          <h3 className="footer-content-h3">
            Canada: <span style={{ fontWeight: "400" }}> +1 416-667-9191</span>
          </h3>
          <h3 className="footer-content-h3">
            United Kingdom:
            <span>
              <p style={{ fontWeight: "400" }}>
                +44 (0) 1708 556 604, +44 (0) 800 1310
              </p>
            </span>
          </h3>
        </div>
      </div>
      <div className="footer-content-3">
        <p>
          Copyright © 2022 Loveworld Publishing Limited, All rights reserved
        </p>
        <p>Privacy | Terms & Conditions</p>
      </div>
    </div>
  </div>
);

export default Homepage;
