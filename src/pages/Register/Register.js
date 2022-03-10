import React from 'react';
import './register.css';

const Register = () => {
	return (
		<>
			<div className='register'>
				<div className='logo'>
					<img src='/images/logo.png' alt='' />
				</div>

				<div className='register_box'>
					<div className='register_form_content'>
						<h3>Sign up</h3>
						<p>Create an account to enter the challenge </p>
					</div>

					<div className='register_form'>
						<form action=''>
							<input
								type='text'
								placeholder='Full name'
								name='fullname'
							/>
							<input
								type='email'
								placeholder='Email'
								name='email'
							/>
							<input
								type='text'
								placeholder='Church (0ptional)'
							/>
							<input type='text' placeholder='Zone (optional)' />

							<div className='register_flex'>
								<input
									type='password'
									placeholder='Password'
									name='password'
									className='password'
								/>
								<input
									type='password'
									placeholder='Confirm password'
									name='confirmpassword'
									className='password'
								/>
							</div>
						</form>

						<div className='register_check'>
							<input
								type='checkbox'
								name=''
								id=''
								className='register_checkbox'
							/>
							<span>
								I accept <a href='#r'>Terms and conditions</a>
							</span>
						</div>

						<button className='register_btn'>Create account</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
