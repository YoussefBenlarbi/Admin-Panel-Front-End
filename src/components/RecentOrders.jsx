import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthUser from './PrivateRoute/AuthUser';
// import { getOrderStatus } from '../lib/utils';
function RecentOrders() {
	const { http, token } = AuthUser();
	const [reservations, setReservations] = useState();
	useEffect(() => {
		const getReservations = async () => {
			const urlReservations = await http.get('/reservations');
			console.log(urlReservations.data);
			setReservations(urlReservations.data.reservations);
		};
		getReservations();
	}, []);
	if (reservations) {
		// console.log(reservations);
	}
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			{!reservations ? (
				<p className='text-sm'>...Loading</p>
			) : (
				<>
					<strong className="text-gray-700 font-medium">Recent Orders</strong>
					<div className="mt-3">
						<table className="w-full text-gray-700 border-x border-gray-200 rounded-sm">
							<thead>
								<tr>
									<td>id</td>
									<td>Customer </td>
									<td>car_id </td>
									<td>date_start </td>
									<td>date_end </td>
									<td>date_reservation </td>
									<td>status </td>
									<td>total</td>
								</tr>
							</thead>
							<tbody>
								{reservations.map((order) => (
									<tr key={order.id}>
										<td>
											<Link to={`/order/${order.id}`}>#{order.id}</Link>
										</td>
										<td>
											<Link to={`/customer/${order.user_id}`}>
												{order.user.name}
											</Link>
										</td>
										<td>
											<Link to={`/car/${order.car_id}`}>{order.car_id}</Link>
										</td>
										<td>{new Date(order.date_start).toLocaleDateString()}</td>
										<td>{new Date(order.date_end).toLocaleDateString()}</td>
										<td>
											{new Date(order.date_reservation).toLocaleDateString()}
										</td>
										<td>
											<SpanWrapper status={order.status} />
										</td>
										<td>{order.total}</td>
										{/* <td>{getOrderStatus(order.current_order_status)}</td> */}
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</>
			)}
		</div>
	);
}

export default RecentOrders;

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
