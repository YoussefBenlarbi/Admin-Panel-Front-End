import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AuthUser from '../PrivateRoute/AuthUser';
import styled from 'styled-components';

export function EditReservation() {
	const { id } = useParams();
	const { http } = AuthUser();
	const [reservation, setReservation] = useState();
	const [cars, setCars] = useState();
	const [users, setUsers] = useState();
	const [state, setState] = useState({
		date_start: '',
		date_end: '',
		date_reservation: '',
		status: '',
		note: '',
		user_id: '',
		car_id: '',
	});
	const getReservations = async () => {
		const apiReservations = await http.get(`/reservations/${id}`);
		setReservation(apiReservations.data);
		setState({
			date_start: apiReservations.data.date_start,
			date_end: apiReservations.data.date_end,
			date_reservation: apiReservations.data.date_reservation,
			status: apiReservations.data.status,
			note: apiReservations.data.note,
			user_id: apiReservations.data.user_id,
			car_id: apiReservations.data.car_id,
		});
	};
	const getCars = async () => {
		const apiCars = await http.get(`/cars`);
		setCars(apiCars.data);
	};
	const getUsers = async () => {
		const apiUsers = await http.get(`/users`);
		let usersFiltred = apiUsers.data.filter((user) => user.is_admin === 0);
		setUsers(usersFiltred);
	};
	useEffect(() => {
		getReservations();
		getCars();
		getUsers();
	}, []);
	const {
		date_start,
		date_end,
		date_reservation,
		status,
		note,
		user_id,
		car_id,
	} = state;

	function handleChange(e) {
		const { name, value } = e.target;
		setState((prev) => {
			return { ...prev, [name]: value };
		});
	}
	function handleSubmit(e) {
		e.preventDefault();
		console.log(state);
	}

	// console.log(users);

	return (
		<div className="flex justify-center items-center">
			<form
				className="w-1/2 rounded-lg border shadow-md p-3 bg-white"
				onSubmit={handleSubmit}
			>
				<h1 className="text-center text-base text-blue-600 font-semibold">
					Update reservation
				</h1>
				<div className="flex flex-col p-2 space-y-1 ">
					<label htmlFor="date1" className="ml-1 text-sm">
						Date debut
					</label>
					<input
						type="date"
						id="date1"
						name="date_start"
						value={date_start}
						onChange={(e) => handleChange(e)}
						className="p-1 border text-sm rounded-md focus:border-2 focus:border-blue-500 focus:outline-none "
					/>
				</div>
				<div className="flex flex-col p-2 space-y-1 ">
					<label htmlFor="date2" className="ml-1 text-sm">
						Date fin
					</label>
					<input
						type="date"
						id="date2"
						value={date_end}
						name="date_end"
						onChange={(e) => handleChange(e)}
						className="p-1 border text-sm rounded-md focus:border-2 focus:border-blue-500 focus:outline-none "
					/>
				</div>
				<div className="flex flex-col p-2 space-y-1 ">
					<label htmlFor="date3" className="ml-1 text-sm">
						Date reservation
					</label>
					<input
						type="date"
						id="date3"
						name='date_reservation'
						value={date_reservation}
						onChange={(e) => handleChange(e)}
						className="p-1 border text-sm rounded-md focus:border-2 focus:border-blue-500 focus:outline-none "
					/>
				</div>
				<div className="flex flex-col p-2 space-y-1 ">
					<label htmlFor="status" className="ml-1 text-sm">
						Status
					</label>
					<select
						id="status"
						name='status'
						className="p-1 focus:outline-none border focus:border-2 focus:border-blue-500 border-gray-200 rounded-lg text-sm"
						value={status}
						onChange={(e) => handleChange(e)}
					>
						<option value={0} className="">
							Cancelled
						</option>
						<option value={1}>Pending</option>
						<option value={2}>Confirmed</option>
					</select>
				</div>
				<div className="flex flex-col p-2 space-y-1 ">
					<label htmlFor="note" className="ml-1 text-sm">
						Description
					</label>
					<textarea
						id="note"
						cols="12"
						rows="2"
						name='note'
						value={note}
						onChange={(e) => handleChange(e)}
						className="border focus:border-2 border-gray-200 p-1 rounded-md  focus:border-blue-500 focus:outline-none"
					></textarea>
				</div>
				<div className="flex flex-col p-2 space-y-1 ">
					<label htmlFor="users" className="ml-1 text-sm">
						User
					</label>
					<select
						id="users"
						className="p-1 focus:outline-none border focus:border-2 focus:border-blue-500 border-gray-200 rounded-lg text-sm"
						value={user_id}
						name='user_id'
						onChange={(e) => handleChange(e)}
					>
						<option value="test" disabled={true}>
							Choisir User
						</option>
						{users &&
							users.map((user) => (
								<option value={user.id} key={user.id}>
									{user.name}
								</option>
							))}
					</select>
				</div>
				<div className="flex flex-col p-2 space-y-1 ">
					<label htmlFor="car" className="ml-1 text-sm">
						car
					</label>
					<select
						id="car"
						className="p-1 focus:outline-none border focus:border-2 focus:border-blue-500 border-gray-200 rounded-lg text-sm"
						value={car_id}
						name='car_id'
						onChange={(e) => handleChange(e)}
					>
						<option disabled={true}>Choisir la Voiture</option>
						{cars &&
							cars.map((car) => (
								<option value={car.id} key={car.id}>
									{car.name}
								</option>
							))}
					</select>
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
function StatusWrapper(props) {
	const { status } = props;
	return (
		<div>
			{status == 0 ? (
				<span className="p-1.5 w-full  text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50">
					Cancelled
				</span>
			) : status == 1 ? (
				<span className="p-1.5 w-full  text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
					Pending
				</span>
			) : (
				<span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
					Confirmed
				</span>
			)}
		</div>
	);
}
