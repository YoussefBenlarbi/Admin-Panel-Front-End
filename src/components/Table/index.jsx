import React, { useEffect, useState } from 'react';
import AuthUser from '../PrivateRoute/AuthUser';
import { SwitchToggle } from '../SwitchToggle';
import { Link } from 'react-router-dom';
export function Table() {
	const { http, token } = AuthUser();
	const [users, setUsers] = useState();
	useEffect(() => {
		const getUsers = async () => {
			const urlUsers = await http.get('/users');
			setUsers(urlUsers.data);
		};
		getUsers();
	}, []);
	if (users) {
		console.log(users);
	}
	return (
		<>
			{!users ? (
				<p className='text-sm'>...Loading</p>
			) : (
				<>
					<div className="p-5 h-full bg-gray-100">
						<h1 className="text-xl mb-2">Our Customers List </h1>

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
											Email
										</th>
										<th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
											Status
										</th>
										<th className="w-25 p-3 text-sm font-semibold tracking-wide text-left">
											Activate User
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-100 bg-white">
									{users &&
										users.map((user) => (
											<tr key={user.id}>
												<td className="p-3 text-sm text-gray-700 whitespace-nowrap">
													<a
														href="#"
														className="font-bold text-blue-500 hover:underline"
													>
														{user.id}
													</a>
												</td>
												<td className="p-3 text-sm text-gray-700 whitespace-nowrap">
													{user.name}
												</td>
												<td className="p-3 text-sm text-gray-700 whitespace-nowrap">
													{user.email}
												</td>
												<td className="p-3 text-sm text-gray-700 whitespace-nowrap">
													<SpanWrapper is_active={user.is_active} />
												</td>
												<td className="p-3 text-sm text-gray-700 whitespace-nowrap">
													<SwitchToggle user={user} />
												</td>
											</tr>
										))}
								</tbody>
							</table>
						</div>
					</div>
					<Link to={'/'} className="ml-3 mt-6 text-red-500 underline">
						go to Dashboard page{' '}
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
