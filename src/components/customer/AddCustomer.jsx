import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AuthUser from '../PrivateRoute/AuthUser';
export default function AddCustomer() {
	const { http, setToken } = AuthUser();
	const navigate = useNavigate();
	// const [name, setName] = useState();
	// const [email, setEmail] = useState();
	// const [password, setPassword] = useState();
	// const [confirmPassword, setConfirmPassword] = useState();
	// const [data, setData] = useState();
	const [state, setState] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
		cin: '',
		address: '',
		sexe: 'rien',
	});
	const { name, email, cin, password, confirmPassword, address, sexe } = state;

	function handleChange(e) {
		const { name, value } = e.target;
		setState((prev) => {
			return { ...prev, [name]: value };
		});
	}
	const submitForm = (e) => {
		e.preventDefault();
		//  api call
		if (password != confirmPassword) {
			toast.error('passwords are not identical', configToast);
		} else {
			console.log(state);
			http.post('/register', state).then((res) => {
				console.log(res);
				// navigate(`/login`);
			});
			// alert('pressed');
		}
	};
	return (
		<div className="flex justify-center items-center">
			<form
				className="w-1/2 rounded-lg border shadow-md p-3 bg-white"
				onSubmit={submitForm}
			>
				<h1 className="text-center text-base text-blue-600 font-semibold">
					Add Customer
				</h1>
				<div className="flex flex-col p-2 space-y-1 ">
					<label htmlFor="name" className="ml-1 text-sm">
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="name"
						value={name}
						onChange={(e) => handleChange(e)}
						className="p-1 border text-sm rounded-md focus:border-2 focus:border-blue-500 focus:outline-none "
					/>
				</div>
				<div className="flex flex-col p-2 space-y-1 ">
					<label htmlFor="email" className="ml-1 text-sm">
						Email
					</label>
					<input
						type="email"
						id="email"
						placeholder="email"
						value={email}
						name="email"
						onChange={(e) => handleChange(e)}
						className="p-1 border text-sm rounded-md focus:border-2 focus:border-blue-500 focus:outline-none "
					/>
				</div>
				<div className="flex flex-col p-2 space-y-1 ">
					<label htmlFor="password" className="ml-1 text-sm">
						password
					</label>
					<input
						placeholder="*********************"
						id="password"
						name="password"
						type="password"
						value={password}
						className="p-1 border text-sm rounded-md focus:border-2 focus:border-blue-500 focus:outline-none "
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="flex flex-col p-2 space-y-1 ">
					<label htmlFor="password" className="ml-1 text-sm">
						Confirm password
					</label>
					<input
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						onChange={(e) => handleChange(e)}
						placeholder="*********************"
						className="p-1 border text-sm rounded-md focus:border-2 focus:border-blue-500 focus:outline-none "
					/>
				</div>
				<div className="flex flex-col p-2 space-y-1 ">
					<label htmlFor="cin" className="ml-1 text-sm">
						cin
					</label>
					<input
						type="text"
						id="cin"
						name="cin"
						placeholder="cin"
						value={cin}
						onChange={(e) => handleChange(e)}
						className="p-1 border text-sm rounded-md focus:border-2 focus:border-blue-500 focus:outline-none "
					/>
				</div>
				<div className="flex flex-col p-2 space-y-1 ">
					<label htmlFor="address" className="ml-1 text-sm">
						address
					</label>
					<input
						type="text"
						id="address"
						name="address"
						placeholder="address"
						value={address}
						onChange={(e) => handleChange(e)}
						className="p-1 border text-sm rounded-md focus:border-2 focus:border-blue-500 focus:outline-none "
					/>
				</div>
				<div className="flex flex-col p-2 space-y-1 ">
					<label htmlFor="sexe" className="ml-1 text-sm">
						sexe
					</label>

					<div className="flex gap-2 text-sm">
						Male :
						<input
							type="radio"
							name="sexe"
							value="male"
							checked={sexe === 'male'}
							onChange={(e) => handleChange(e)}
							className="p-1 border text-sm rounded-md focus:border-2 focus:border-blue-500 focus:outline-none "
						/>
						Female :
						<input
							type="radio"
							name="sexe"
							checked={sexe === 'female'}
							value="female"
							onChange={(e) => handleChange(e)}
							className="p-1 border text-sm rounded-md focus:border-2 focus:border-blue-500 focus:outline-none "
						/>
					</div>
				</div>

				<div className="flex justify-center">
					<button
						type="submit"
						className="p-2 bg-slate-600 text-white rounded-md border text-sm w-20 hover:bg-slate-400"
					>
						Ajouter
					</button>
				</div>
			</form>
		</div>
	);
}
