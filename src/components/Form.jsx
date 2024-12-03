import { useState } from 'react';
import { ReactComponent as GoogleLogo } from '../assets/Google_logo.svg';
import InputField from './shared/InputField';

const Form = () => {
	const [errorMessage, setErrorMessage] = useState('');
	const [formData, setFormData] = useState({
		'first-name': '',
		'last-name': '',
		'email-or-phone': '',
		dob: '',
		password: '',
		'confirm-password': '',
		agreement: false,
	});

	const handleChange = (e) => {
		const { name, type, value, checked } = e.target;

		setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			!formData['first-name'] ||
			!formData['last-name'] ||
			!formData['email-or-phone'] ||
			!formData.dob ||
			!formData.password ||
			!formData['confirm-password']
		) {
			setErrorMessage('Please fill in all fields.');
		} else if (formData.password !== formData['confirm-password']) {
			setErrorMessage('Passwords does not match.');
		} else if (!formData.agreement) {
			setErrorMessage('You must agree to the terms and privacy policy.');
		} else {
			setErrorMessage('');
			alert('Your account had been created successfully!');
		}
	};

	return (
		<form action='#' onSubmit={handleSubmit} className='grid grid-cols-2 gap-5'>
			<InputField
				type='text'
				id='first-name'
				placeholder='Bill'
				label='First name'
				value={formData['first-name']}
				onChange={handleChange}
			/>
			<InputField
				type='text'
				id='last-name'
				placeholder='Sanders'
				value={formData['last-name']}
				onChange={handleChange}
				label='Last name'
			/>
			<InputField
				type='text'
				id='email-or-phone'
				placeholder='bill.sanders@example.com'
				value={formData['email-or-phone']}
				onChange={handleChange}
				label='Email or Phone number'
			/>
			<InputField
				type='date'
				id='dob'
				value={formData.dob}
				onChange={handleChange}
				label='Date of Birth (MM/DD/YY)'
			/>
			<InputField
				type='password'
				id='password'
				value={formData.password}
				onChange={handleChange}
				label='Password'
			/>
			<InputField
				type='password'
				id='confirm-password'
				value={formData['confirm-password']}
				onChange={handleChange}
				label='Confirm password'
			/>
			<div className='flex items-center gap-x-3'>
				<input
					type='checkbox'
					name='remember-me'
					id='remember-me'
					className='size-4'
				/>
				Remember me
			</div>
			<div className='justify-self-end'>
				<a href='/' className='text-secondary-content underline'>
					Forgot password?
				</a>
			</div>
			<div className='flex items-center gap-x-3 col-span-2'>
				<input
					type='checkbox'
					name='agreement'
					id='agreement'
					value={formData.agreement}
					onChange={handleChange}
					className='size-4'
				/>
				<p>
					I agree to all the{' '}
					<a href='/' target='_blank' className='text-secondary-content'>
						Terms
					</a>{' '}
					and{' '}
					<a href='/' target='_blank' className='text-secondary-content'>
						Privacy policy
					</a>{' '}
				</p>
			</div>
			<div className='col-span-2 text-sm text-red-500'>{errorMessage}</div>
			<button className='bg-secondary-content text-neutral py-3 rounded'>
				Create account
			</button>
			<button
				type='button'
				className='bg-primary-content text-neutral flex items-center justify-center gap-x-2 py-3 rounded'
			>
				<GoogleLogo />
				Sign-in with google
			</button>
		</form>
	);
};

export default Form;
