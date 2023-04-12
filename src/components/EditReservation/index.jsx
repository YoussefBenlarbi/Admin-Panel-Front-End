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
	const getReservations = async () => {
		const apiReservations = await http.get(`/reservations/${id}`);
		setReservation(apiReservations.data);
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
	console.log(users);

	return (
		<div className="flex justify-center items-center">
			<form className="w-1/2 rounded-lg border shadow-md p-3 bg-white">
				<h1 className="text-center text-base font-semibold">
					Update reservation
				</h1>
				<div className="flex flex-col p-2 space-y-1 ">
					<label htmlFor="date1" className="ml-1 text-sm">
						Date debut
					</label>
					<input
						type="date"
						id="date1"
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
						className="p-1 border text-sm rounded-md focus:border-2 focus:border-blue-500 focus:outline-none "
					/>
				</div>
				<div className="flex flex-col p-2 space-y-1 ">
					<label htmlFor="status" className="ml-1 text-sm">
						Status
					</label>
					<select
						id="status"
						className="p-1 focus:outline-none border focus:border-2 focus:border-blue-500 border-gray-200 rounded-lg text-sm"
					>
						<option value="test" className="">
							test
						</option>
						<option value="test">test</option>
						<option value="test">test</option>
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
						// value={}
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
					<label htmlFor="status" className="ml-1 text-sm">
						Status
					</label>
					<select
						id="status"
						className="p-1 focus:outline-none border focus:border-2 focus:border-blue-500 border-gray-200 rounded-lg text-sm"
					>
						<option value="test" className="">
							test
						</option>
						<option value="test">test</option>
						<option value="test">test</option>
					</select>
				</div>
				<div className="flex justify-center">
					<button className="p-2 bg-slate-600 text-white rounded-md border text-sm w-20 hover:bg-slate-400">
						Update
					</button>
				</div>
			</form>
		</div>
	);
}
