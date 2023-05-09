import React, { useEffect, useState } from 'react';
import AuthUser from '../PrivateRoute/AuthUser';
import { SwitchToggle } from '../SwitchToggle';
import { Link } from 'react-router-dom';
import { HiOutlineTrash, HiPencilAlt } from 'react-icons/hi';
import swal from 'sweetalert';
import { SwalConfig } from '../swalConfig/beforeDelete';
import BeatLoaderSpinner from '../reactSpinners/BeatLoaderSpinner';
export function Table() {
	const { http, token } = AuthUser();
	const [users, setUsers] = useState();
	const getUsers = async () => {
		const urlUsers = await http.get('/users');
		setUsers(urlUsers.data);
	};
	useEffect(() => {
		getUsers();
	}, []);
	if (users) {
		console.log(users);
	}
	async function handleDeleteUser(id) {
		swal(SwalConfig).then(async (willDelete) => {
			if (willDelete) {
				swal('Poof! the user has been deleted!', {
					icon: 'success',
				});
				await http.delete(`users/${id}`);
				getUsers();
			} else {
				swal('Nothing was deleted !');
			}
		});
	}
	return (
		<>
			{!users ? (
				<BeatLoaderSpinner height="80vh" />
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
										<th className="w-25 p-3 text-sm font-semibold tracking-wide text-center">
											Activate User
										</th>
										<th className="w-25 p-3 text-sm font-semibold tracking-wide text-left">
											operations
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
												<td className="p-3 text-sm text-gray-700 whitespace-nowrap text-center">
													<SwitchToggle user={user} />
												</td>
												<td className="p-3 text-sm flex space-x-1  text-gray-700 whitespace-nowrap">
													<Link
														to={`/edit-customer/${user.id}`}
														className="p-2 rounded-lg bg-indigo-500 text-white  border border-indigo-500 hover:bg-transparent hover:text-indigo-500 "
													>
														<HiPencilAlt />
													</Link>
													<button
														className="p-2 rounded-lg bg-red-500 text-white  border border-red-500 hover:bg-transparent hover:text-red-500"
														onClick={() => handleDeleteUser(user.id)}
													>
														<HiOutlineTrash />
													</button>
												</td>
											</tr>
										))}
								</tbody>
							</table>
						</div>
						<Link to={'/add-customer'} className="ml-3 mt-6 text-white ">
							<button className="p-2 text-sm font-medium  ml-2 mt-2 border border-indigo-500  rounded-lg bg-indigo-500  hover:bg-transparent  hover:text-indigo-500">
								Add New Customer{' '}
							</button>
						</Link>
					</div>
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
