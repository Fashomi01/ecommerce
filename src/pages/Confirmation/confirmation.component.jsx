import React from "react";
import "./confirmation.styles.css";
import logo from '../../assets/img/Logo.png';
import message from '../../assets/icons/message_icon.png';
// import './confirmation.cstat-skip'

const Confirmation = () => {
  return (
    <>
      <div className="confirmation">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="confirmation_box">
          <div className="confirmation_box_verify">
            <div className="confirmation_icon">
              <img src={message} alt="" />
            </div>
            <div className="confirmation_mail">
              Your email has been successfully verified! 
              Kindly proceed to payment. 
            </div>
          </div>

          <div className="payment_header">
            Make payment
          </div>
          <div className="payment_content_text">
            To enter the challenge, you are required to make payment.
          </div>

          <div className="payment_option">
            <div className="payment_option_text">
              Amount
            </div>
            <input />
          </div>
          <button>Pay now</button>

        </div>
      </div>
    </>
  )
}

export default Confirmation;