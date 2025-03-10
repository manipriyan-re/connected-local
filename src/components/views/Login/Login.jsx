'use client';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import './login.scss';
import { login } from '@/store/slice/authSlice';
import PrivacyPopup from './PrivacyPopup/PrivacyPopup';
import TermsPopup from './TermsPopup/TermsPopup';

export default function Login() {
	const [isForgotPassword, setIsForgotPassword] = useState(false);
	const [isAnimated, setIsAnimated] = useState(false);
	const [userId, setUserId] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [forgotUserId, setForgotUserId] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [showPrivacyPopup, setPrivacyPopup] = useState(false);
	const [showTermsPopup, setTermsPopup] = useState(false);
	const [inputError, setInputError] = useState({
		userId: false,
		password: false,
	});

	const dispatch = useDispatch();
	const router = useRouter();

	useEffect(() => {
		setIsAnimated(true);
	}, []);

	const handleLogin = (e) => {
		e.preventDefault(); // Prevents page reload

		const adminCredentials = { id: 'admin', password: 'welcome' };

		if (
			userId === adminCredentials.id &&
			password === adminCredentials.password
		) {
			dispatch(login(adminCredentials));
			router.push('/monitoring/vehicle-dashboard'); // Redirects to home page
		} else {
			setErrorMessage('Enter valid user id and password or contact RE Admin');
			setInputError({
				userId: true,
				password: true,
			});
		}
	};

	return (
		<div className="login_container">
			<div className={`login_card ${isAnimated ? 'animate' : ''}`}>
				<div className="login_logoContainer">
					<Image
						src={
							isForgotPassword
								? '/images/forgot-pass-logo.svg'
								: '/images/login-logo.svg'
						}
						alt="Logo"
						width={350}
						height={300}
						className="mb-4"
					/>
					<h1
						className={`login_header ${isForgotPassword ? 'login_headerLeft' : 'login_headerCenter'}`}>
						{isForgotPassword ? (
							<span className="login_headerWelcome">Forgot Password</span>
						) : (
							<span className="login_headerWelcome">Welcome To</span>
						)}
						{!isForgotPassword && <br />}
						{!isForgotPassword && (
							<span className="login_headerPortal">Techassist Portal</span>
						)}
					</h1>
				</div>

				{isForgotPassword ? (
					<div>
						<p className="login_forgotDescription">
							Please enter the RE ID to send the password reset information
						</p>
						<div className="mb-4">
							<label htmlFor="forgotUserId" className="login_label">
								User ID
							</label>
							<input
								type="text"
								id="forgotUserId"
								placeholder="Enter RE ID"
								className="login_input"
								value={forgotUserId}
								onChange={(e) => setForgotUserId(e.target.value)}
							/>
						</div>
						<div className="mb-4">
							<button type="button" className="login_button">
								Request Reset Link
							</button>
						</div>
						<div className="login_textCenter">
							<a
								href="#"
								className="login_textLink"
								onClick={() => setIsForgotPassword(false)}>
								Back to Login
							</a>
						</div>
					</div>
				) : (
					<form onSubmit={handleLogin}>
						<div className="mb-4">
							<label htmlFor="userId" className="login_label">
								User ID
							</label>
							<input
								type="text"
								id="userId"
								placeholder="Enter RE ID"
								className={`login_input ${inputError.userId ? 'login_errorBorder' : ''}`}
								value={userId}
								onChange={(e) => setUserId(e.target.value)}
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="password" className="login_label">
								Password
							</label>
							<div className="relative w-full">
								<input
									type={showPassword ? 'text' : 'password'}
									id="password"
									placeholder="Enter Password"
									className={`login_input ${inputError.password ? 'login_errorBorder' : ''} pr-10`}
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
								<button
									type="button"
									className="absolute right-3 top-1/2  -translate-y-1/2 p-1"
									onClick={() => setShowPassword(!showPassword)}>
									<Image
										src="/images/eye-icon.svg"
										alt="Toggle Password Visibility"
										width={20}
										height={20}
										className={`transition-opacity ${showPassword ? 'opacity-50' : 'opacity-100'}`}
									/>
								</button>
							</div>
						</div>
						<div className="flex justify-end">
							<a
								href="#"
								className="login_textLinkBlue"
								onClick={() => setIsForgotPassword(true)}>
								Forgot Password?
							</a>
						</div>
						<br />
						{errorMessage && (
							<div className="text-center mb-4">
								<p className="text-red-500 text-xs">{errorMessage}</p>
							</div>
						)}
						<div className="mb-4">
							<button
								type="submit" // Changed to "submit" so Enter works
								className="login_button login_buttonForgot">
								Login
							</button>
						</div>
					</form>
				)}
			</div>
			<div className="login_footer">
				<button className="login_footerLink">Royalenfield © 2024</button>
				<button
					onClick={() => {
						setPrivacyPopup(true);
					}}
					className="login_footerLink">
					Privacy Policy
				</button>
				<button
					onClick={() => {
						setTermsPopup(true);
					}}
					className="login_footerLink">
					Terms and Conditions
				</button>
			</div>
			<PrivacyPopup
				isVisible={showPrivacyPopup}
				onClose={() => {
					setPrivacyPopup(false);
				}}
			/>
			<TermsPopup
				isVisible={showTermsPopup}
				onClose={() => {
					setTermsPopup(false);
				}}
			/>
		</div>
	);
}
