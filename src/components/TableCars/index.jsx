import React, { useEffect, useState } from 'react';
import AuthUser from '../PrivateRoute/AuthUser';
import { Link } from 'react-router-dom';
import {
	HiOutlineInformationCircle,
	HiOutlineTrash,
	HiPencilAlt,
} from 'react-icons/hi';
import { SwalConfig } from '../swalConfig/beforeDelete';
import BeatLoaderSpinner from '../reactSpinners/BeatLoaderSpinner';
export function Table() {
	const { http, token } = AuthUser();
	const [cars, setCars] = useState();
	const getCars = async () => {
		const urlCars = await http.get('/cars');
		setCars(urlCars.data);
	};
	useEffect(() => {
		getCars();
	}, []);
	if (cars) {
		// console.log(cars);
	}
	async function handleDeleteCar(id) {
		swal(SwalConfig).then(async (willDelete) => {
			if (willDelete) {
				swal('Poof! the car has been deleted!', {
					icon: 'success',
				});
				await http.delete(`cars/${id}`);
				getCars();
			} else {
				swal('Nothing was deleted !');
			}
		});
	}
	return (
		<>
			{!cars ? (
				<BeatLoaderSpinner height='80vh'/>
			) : (
				<>
					<div className="p-5 h-full bg-gray-100">
						<h1 className="text-xl mb-2">Our Cars</h1>

						<div className="rounded-lg shadow overflow-auto">
							<table className="w-full">
								<thead className="bg-gray-50 border-b-2 border-gray-200">
									<tr>
										<th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
											No.
										</th>
										<th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
											Name
										</th>
										<th className="p-3 text-sm font-semibold tracking-wide text-left">
											dailyPrice
										</th>
										<th className="p-3 text-sm font-semibold tracking-wide text-left">
											monthlyPrice
										</th>
										<th className="p-3 text-sm font-semibold tracking-wide text-left">
											gearType
										</th>
										<th className="p-3 text-sm font-semibold tracking-wide text-left">
											gasType
										</th>
										<th className="p-3 text-sm font-semibold tracking-wide text-left">
											description
										</th>
										{/* <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
											Status
										</th> */}
										<th className="w-25 p-3 text-sm font-semibold tracking-wide text-left">
											operations
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-100 bg-white">
									{cars &&
										cars.map((car) => (
											<tr key={car.id}>
												<td className="p-3 text-sm text-gray-700 whitespace-nowrap">
													<a
														href="#"
														className="font-bold text-blue-500 hover:underline"
													>
														{car.id}
													</a>
												</td>
												<td className="p-3 text-sm text-gray-700 whitespace-nowrap">
													{car.name}
												</td>
												<td className="p-3 text-sm text-gray-700 whitespace-nowrap">
													{car.dailyPrice}
												</td>
												<td className="p-3 text-sm text-gray-700 whitespace-nowrap">
													{car.monthlyPrice}
												</td>
												<td className="p-3 text-sm text-gray-700 whitespace-nowrap">
													{car.gearType}
												</td>
												<td className="p-3 text-sm text-gray-700 whitespace-nowrap">
													{car.gasType}
												</td>
												<td className="p-3 text-sm text-gray-700 whitespace-nowrap">
													{car.description}
												</td>
												{/* <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
													{car.status}
												</td> */}
												<td className="p-3 text-sm flex space-x-1  text-gray-700 whitespace-nowrap">
													{/* <button className="p-2 rounded-lg bg-indigo-500 text-white  border-2 border-indigo-500">
														<HiOutlineInformationCircle/>
													</button> */}
													<Link
														to={`/car/${car.id}`}
														className="p-2 rounded-lg bg-indigo-500 text-white  border border-indigo-500 hover:bg-transparent hover:text-indigo-500 "
													>
														<HiPencilAlt />
													</Link>
													<button
														className="p-2 rounded-lg bg-red-500 text-white  border border-red-500 hover:bg-transparent hover:text-red-500"
														onClick={() => handleDeleteCar(car.id)}
													>
														<HiOutlineTrash />
													</button>
												</td>
											</tr>
										))}
								</tbody>
							</table>
						</div>
					</div>
					<Link to={'/AddCar'} className="ml-3 mt-6 text-white underline">
						<button className="p-2 text-sm font-medium  ml-2 border border-indigo-500  rounded-lg bg-indigo-500  hover:bg-transparent  hover:text-indigo-500">
							Add New Car{' '}
						</button>
					</Link>
				</>
			)}
		</>
	);
}

function SpanWrapper(props) {
	const { is_active } = props;
	return (
		<div>
			{is_active ? (
				<span className="p-1.5 w-full  text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
					Active
				</span>
			) : (
				<span className="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50">
					Not Active
				</span>
			)}
		</div>
	);
}
