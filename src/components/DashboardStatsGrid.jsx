import React, { useEffect, useState } from 'react';
import { IoAccessibility, IoBagHandle, IoBookmark, IoBookmarks, IoCarSportSharp } from 'react-icons/io5';
import AuthUser from './PrivateRoute/AuthUser';
import BeatLoaderSpinner from './reactSpinners/BeatLoaderSpinner';
function DashboardStatsGrid() {
	const { http } = AuthUser();
	const [data, setData] = useState();
	const [numberUsers, setNumberUsers] = useState();
	const [countReservation, setCountReservation] = useState();
	const [sales, setSales] = useState();
	const getSexeStat = async () => {
		const urlRequest = await http.get('/reservations');
		// console.log(urlSexe.data.arraySexe);
		setData(urlRequest.data);
		setNumberUsers(urlRequest.data.users.length);
		setCountReservation(urlRequest.data.reservations.length);
		const saleso = urlRequest.data.reservations.reduce(
			(acc, cur) => (acc += cur.total),
			0
		);
		setSales(saleso);
	};
	useEffect(() => {
		getSexeStat();
	}, []);
	if (data) {
		console.log(data);
	}
	return (
		<div className="flex gap-4 w-full">
			{!data ? (
				<BeatLoaderSpinner height="100%" />
			) : (
				<>
					<BoxWrapper>
						<div className="rounded-full h-8 w-8 flex items-center justify-center bg-sky-500">
							<IoBagHandle className="text-2xl text-white" />
						</div>
						<div className="pl-4">
							<span className="text-sm text-gray-500 font-light">
								Total sales{' '}
							</span>
							<div className="flex items center">
								<strong className="text-xl text-gray-700 font-semibold">
								{sales ? sales : ''} 
								</strong>
								<span className="text-sm text-green-500 pl-1 pt-1">DH</span>
							</div>
						</div>
					</BoxWrapper>
					<BoxWrapper>
						<div className="rounded-full h-8 w-8 flex items-center justify-center bg-indigo-500">
							<IoAccessibility className="text-2xl text-white" />
						</div>
						<div className="pl-4">
							<span className="text-sm text-gray-500 font-light">
								Number users{' '}
							</span>
							<div className="flex items center">
								<strong className="text-xl text-gray-700 font-semibold">
									{numberUsers ? numberUsers : ''} users
								</strong>
								{/* <span className="text-sm text-blue-500 pl-2">active users</span> */}
							</div>
						</div>
					</BoxWrapper>
					<BoxWrapper>
						<div className="rounded-full h-8 w-8 flex items-center justify-center bg-green-500">
							<IoBagHandle className="text-2xl text-white" />
						</div>
						<div className="pl-4">
							<span className="text-sm text-gray-500 font-light">
								Total sales{' '}
							</span>
							<div className="flex items center">
								<strong className="text-xl text-gray-700 font-semibold">
								{sales ? sales : ''} 
								</strong>
								<span className="text-sm text-green-500 pl-2">$</span>
							</div>
						</div>
					</BoxWrapper>
					<BoxWrapper>
						<div className="rounded-full h-8 w-8 flex items-center justify-center bg-red-500">
							<IoCarSportSharp className="text-2xl text-white" />
						</div>
						<div className="pl-4">
							<span className="text-sm text-gray-500 font-light">
								Count Reservation
							</span>
							<div className="flex items center">
								<strong className="text-xl text-gray-700 font-semibold">
									{countReservation ? countReservation : ''} 
								</strong>
								{/* <span className="text-sm text-green-500 pl-2">+234</span> */}
							</div>
						</div>
					</BoxWrapper>
				</>
			)}
		</div>
	);
}

export default DashboardStatsGrid;
function BoxWrapper({ children }) {
	return (
		<div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
			{children}
		</div>
	);
}
