import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import AdminPicture from '../assets/adminMale0.png';
import { toast } from 'react-toastify';
import { ToastConfig } from './toastConfig/success';
import { AlertError } from './AlertError';
import AuthUser from './PrivateRoute/AuthUser';
import { SCREENS } from './responsive';

const StandaloneCar = styled.div`
	width: 50%;
	height: 10em;
	right: 0em;
	top: 0em;
	position: absolute;
	user-select: none;
	img {
		width: auto;
		height: 100%;
		max-width: fit-content;
	}

	@media (min-width: ${SCREENS.sm}) {
		height: 24em;
		right: 0em;
		left: 0em;
		top: 5em;
	}

	@media (min-width: ${SCREENS.lg}) {
		height: 28em;
		right: 0em;
		left: 3em;
		top: 5em;
	}

	@media (min-width: ${SCREENS.xl}) {
		height: 30em;
		right: 0em;
		left: 4em;
		top: 5em;
	}
`;
function Login() {
	const [loading, setLoading] = useState(false);
	const { http, setToken } = AuthUser();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState();
	const location = useLocation();
	const { feedback } = location.state || {};
	const handleLogin = async (e) => {
		e.preventDefault();
		if (!email.trim('') || !password.trim('')) {
			toast.error('all fields are required!', ToastConfig);
		} else {
			setLoading(true);
			try {
				const response = await http.post('/login', { email, password });
				// do something with response data
				setToken(response.data.user, response.data.authorization.token);
				setLoading(false);
				setUser(response.data.user);
			} catch (err) {
				// handle error
				setLoading(false);
				toast.error('Please enter the correct email and password', ToastConfig);

			}
		}
	};
	return (
		<form className="w-full h-screen flex " onSubmit={handleLogin}>
			<div className="	hidden md:w-[50%] bg-gray-100  md:flex  md:justify-center  md:items-center shadow">
				<StandaloneCar>
					<img src={AdminPicture} alt="" />
				</StandaloneCar>
			</div>
			<div className="w-full h-full md:w-[50%] flex flex-col  items-center md:justify-center mt-28 md:mt-0">
				<h2 className="text-4xl mb-4">Car Agency</h2>
				<small className="mb-4 text-gray-500 text-semibold text-meduim">
					Admin Panel
				</small>
				<div className="mb-4 w-[60%]">
					<input
						placeholder="Email"
						id="email"
						required
						type="email"
						className="p-2 text-gray-500 border rounded w-full focus:border-blue-500 outline-none shadow	"
						onChange={(e) => setEmail(e.target.value)}
					/>{' '}
				</div>
				<div className="mb-4 w-[60%]">
					<input
						id="password"
						type="password"
						className="p-2 text-gray-500 border rounded w-full focus:border-blue-500 outline-none shadow	"
						placeholder="*********************"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button
					type="submit"
					disabled={loading}
					className="	p-2 border rounded mb-4 w-[60%] bg-gray-800 hover:bg-gray-700  text-white hover:cursor-pointer font-mono 	`};
                "
				>
					{loading ? 'Loading...' : 'Connexion'}
				</button>

				<span className="w-[60%]">
					{feedback && <AlertError feedback={feedback} />}
				</span>
			</div>
		</form>
	);
}

export default Login;
