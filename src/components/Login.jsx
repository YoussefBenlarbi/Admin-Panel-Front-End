import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import AuthUser from './PrivateRoute/AuthUser';
import { AlertError } from './AlertError';
function Login() {
	const [loading, setLoading] = useState(false);
	const { http, setToken } = AuthUser();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');
	const [user, setUser] = useState();
	const [error, setError] = useState();
	const location = useLocation();
	const { feedback } = location.state || {};
	const handleLogin = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(null);
		try {
			const response = await http.post('/login', { email, password });
			// do something with response data
			setToken(response.data.user, response.data.authorization.token);
			// console.log(response.data);
			setLoading(false);
			setUser(response.data.user);
			setMessage('succes');
		} catch (err) {
			// handle error
			setError(err.message || 'Something went wrong');
			setLoading(false);
		}
	};
	return (
		<div className="w-full h-screen flex justify-center items-center">
			{' '}
			<div className="h-full w-1/2 bg-login-pic"></div>
			<div className="w-1/2 flex justify-center items-center  bg-gray-100 h-full">
				<form className="bg-white w-3/4 shadow-md rounded px-8 pt-6 pb-8 ">
					<div className="mb-4">
						<h1 className="text-center text-cyan-600 tracking-widest text-3xl font-bold">
							Log in{' '}
						</h1>
						<label
							className="block text-gray-700 text-sm  mb-2"
							htmlFor="email"
						>
							Email
						</label>
						<input
							className="shadow appearance-none border focus:border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-cyan-700"
							id="email"
							type="text"
							placeholder="email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="mb-6">
						<label
							className="block text-gray-700 text-sm  mb-2"
							htmlFor="password"
						>
							Password
						</label>
						<input
							className="shadow appearance-none border focus:border-2   rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-cyan-700"
							id="password"
							type="password"
							placeholder="*********************"
							onChange={(e) => setPassword(e.target.value)}
						/>
						{/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
					</div>
					<div className="flex items-center justify-between">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
							onClick={handleLogin}
							disabled={loading}
						>
							{loading ? 'Loading...' : 'Sign in '}
						</button>
						<a
							className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
							href="#"
						>
							Forgot Password?
						</a>
					</div>
					<p className="text-center mt-5 text-gray-500 text-xs">
						&copy;2020 Acme Corp. All rights reserved.
					</p>
					<span>
						{message && <p className="text-red-600">{message}</p>}
						{user && (
							<p className="font-mono">
								Hello Mr <span className="font-bold">{user.name}</span>
							</p>
						)}
						{error && <p className="error">{error}</p>}
						{feedback && <AlertError feedback={feedback} />}
					</span>
				</form>
			</div>
		</div>
	);
}

export default Login;
