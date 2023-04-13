import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthUser from './PrivateRoute/AuthUser';
import { HiOutlineTrash, HiPencilAlt } from 'react-icons/hi';
import swal from 'sweetalert';
import { SwalConfig } from './swalConfig/beforeDelete';
// import { getOrderStatus } from '../lib/utils';
function Reservations() {
	const { http, token } = AuthUser();
	const [reservations, setReservations] = useState();
	const getReservations = async () => {
		const urlReservations = await http.get('/reservations');
		setReservations(urlReservations.data);
	};
	useEffect(() => {
		getReservations();
	}, []);
	async function handleDeleteReservation(id) {
		swal(SwalConfig).then(async (willDelete) => {
			if (willDelete) {
				swal('Poof! the car has been deleted!', {
					icon: 'success',
				});
				await http.delete(`reservations/${id}`);
				getReservations();
			} else {
				swal('Nothing was deleted !');
			}
		});
	}
	return (
		<>
			{!reservations ? (
				<p className="text-sm">...Loading</p>
			) : (
				<div className="p-3 h-full  bg-gray-100">
					{' '}
					<h1 className="text-xl mb-2">Our Reservations</h1>
					<table className="w-full  rounded-lg mb-7 shadow overflow-auto p-5  bg-gray-100 ">
						<thead className="bg-gray-50 border-b-2 border-gray-200">
							<tr>
								<th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
									id
								</th>
								{/* <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
										Customer{' '}
									</th>
									<th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
										car_id{' '}
									</th> */}
								<th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
									date_start{' '}
								</th>
								<th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
									date_end{' '}
								</th>
								<th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
									date_reservation{' '}
								</th>
								<th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
									status{' '}
								</th>
								<th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
									total
								</th>
								<th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
									operations
								</th>
							</tr>
						</thead>
						<tbody className="bg-white">
							{reservations.map((order) => (
								<tr key={order.id}>
									<td>
										<Link to={`/order/${order.id}`}>#{order.id}</Link>
									</td>
									{/* <td>
											<Link to={`/customer/${order.user_id}`}>
												{order.user.name}
											</Link>
										</td>
										<td>
											<Link to={`/car/${order.car_id}`}>{order.car_id}</Link>
										</td> */}
									<td>{new Date(order.date_start).toLocaleDateString()}</td>
									<td>{new Date(order.date_end).toLocaleDateString()}</td>
									<td>
										{new Date(order.date_reservation).toLocaleDateString()}
									</td>
									<td>
										<SpanWrapper status={order.status} />
									</td>
									<td>{order.total}</td>
									<td className="p-3 text-sm flex space-x-1  text-gray-700 whitespace-nowrap">
										<Link
											to={`/reservation/${order.id}`}
											className="p-2 rounded-lg bg-indigo-500 text-white  border border-indigo-500 hover:bg-transparent hover:text-indigo-500 "
										>
											<HiPencilAlt />
										</Link>
										<button
											className="p-2 rounded-lg bg-red-500 text-white  border border-red-500 hover:bg-transparent hover:text-red-500"
											onClick={() => handleDeleteReservation(order.id)}
										>
											<HiOutlineTrash />
										</button>
									</td>
									{/* <td>{getOrderStatus(order.current_order_status)}</td> */}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</>
	);
}

export default Reservations;

function SpanWrapper(props) {
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
