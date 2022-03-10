import React from "react";
import "./payment.styles.css";
import messageIcon from "../../assets/icons/message_icon.png";
import logo from "../../assets/img/Logo.png";

const Payment = () => {
  return (
    <>
      <div className="payment">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="payment_box">
          <div className="payment_content">
            <div className="first_section">
              <img src={messageIcon} alt="" className="message_icon" />
              <p className="first_section_p">
                Your email has been successfully verified! Kindly proceed to
                payment.
              </p>
            </div>
            <div className="second_section">
              <h1 className="payment_h1">Make payment</h1>
              <p className="payment_p">To enter the challenge, you are required to make payment.</p>
              <div className="second_payment_section">
                <p className="second_payment_section_p">Amount</p>
                <div className="select_currency">
                  <select name="Currency" id="" className="select_currency_select">
                    <option value="Naira">N</option>
                    <option value="Dollar">$</option>
                  </select>
                    <input type="text" id="amount" name="amount" disabled placeholder="500" className="payment_amount"/>
                </div>
                <button className="payment_btn">Pay now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
