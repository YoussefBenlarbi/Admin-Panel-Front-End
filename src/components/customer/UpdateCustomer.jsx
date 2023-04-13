import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AuthUser from '../PrivateRoute/AuthUser';
export default function UpdateCustomer() {
	const { id } = useParams();
	const { http } = AuthUser();
	const navigate = useNavigate();
	// const [user, setUser] = useState();

	const [state, setState] = useState({
		name: '',
		email: '',
		// password: '',
		cin: '',
		address: '',
		sexe: 'rien',
	});
	const getUser = async () => {
		const apiReservations = await http.get(`/users/${id}`);
		console.log(apiReservations.data);
		setState({
			name: apiReservations.data.name || '',
			email: apiReservations.data.email || '',
			// password: apiReservations.data.password || '',
			cin: apiReservations.data.detail.cin || '',
			address: apiReservations.data.detail.address || '',
			sexe: apiReservations.data.detail.sexe || '',
		});
	};

	useEffect(() => {
		getUser();
	}, []);
	const { name, email, cin, address, sexe } = state;
	function handleChange(e) {
		const { name, value } = e.target;
		setState((prev) => {
			return { ...prev, [name]: value };
		});
	}
	async function handleSubmit(e) {
		e.preventDefault();
		await http.patch(`/users/${id}`, state);
		// console.log(state);
		navigate('/customers');
	}
	return (
		<div className="flex justify-center items-center">
			<form
				className="w-1/2 rounded-lg border shadow-md p-3 bg-white"
				onSubmit={handleSubmit}
			>
				<h1 className="text-center text-base text-blue-600 font-semibold">
					Update Customer Info
				</h1>
				<div className="flex flex-col p-2 space-y-1 ">
					<label htmlFor="name" className="ml-1 text-sm">
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
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
						value={email}
						name="email"
						onChange={(e) => handleChange(e)}
						className="p-1 border text-sm rounded-md focus:border-2 focus:border-blue-500 focus:outline-none "
					/>
				</div>
				{/* <div className="flex flex-col p-2 space-y-1 ">
					<label htmlFor="password" className="ml-1 text-sm">
						password
					</label>
					<input
						type="password"
						id="password"
						name="password"
						value={password}
						onChange={(e) => handleChange(e)}
						className="p-1 border text-sm rounded-md focus:border-2 focus:border-blue-500 focus:outline-none "
					/>
				</div> */}
				<div className="flex flex-col p-2 space-y-1 ">
					<label htmlFor="cin" className="ml-1 text-sm">
						cin
					</label>
					<input
						type="text"
						id="cin"
						name="cin"
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
						Update
					</button>
					
				</div>
			</form>
		</div>
	);
}
