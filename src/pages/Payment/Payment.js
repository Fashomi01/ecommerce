import React from 'react';
import './payment.css'

const Payment = () => {
	return (
		<>
			<div className='payment'>
				<div className='logo'>
					<img src='/images/logo.png' alt='' />
				</div>

                <div className="payment_alert"></div>

				<div className='payment_box'>
					<div className='payment_content'>
						<h3>Make payment </h3>
						<p>To enter the challenge, you are required to make payment.</p>
					</div>

                    <div className="payment_input">
                        <h4>Amount</h4>
                        <select name="" id="" value='$'></select>
                    </div>

					<button className='payment_btn'>Pay now</button>
				</div>
			</div>
		</>
	);
};

export default Payment;
