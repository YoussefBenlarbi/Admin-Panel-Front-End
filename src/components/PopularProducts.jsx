import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthUser from './PrivateRoute/AuthUser';
import BeatLoaderSpinner from './reactSpinners/BeatLoaderSpinner';

function PopularProducts() {
	const [cars, setCars] = useState([]);
	const { http } = AuthUser();
	const getCars = async () => {
		const apiCars = await http.get('/carsInfo');
		setCars(apiCars.data);
	};
	useEffect(() => {
		getCars();
	}, []);
	console.log(cars);
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 w-[16rem] ">
			{!cars ? (
				<BeatLoaderSpinner height="100%" />
			) : (
				<>
					<strong className="text-gray-700 font-medium">Popular Orders</strong>
					<div className="mt-4 flex flex-col gap-3">
						{cars &&
							cars.slice(0, 8).map((car) => (
								<Link
									to={`/car/${car.id}`}
									className="flex hover:no-underline"
									key={car.id}
								>
									<div className="w-10 h-10 min-w-10 bg-gray-200 rounded">
										<img
											className="w-full h-full object-fill	 rounded-sm overflow-hidden"
											src={`http://127.0.0.1:8000/api/${car.thumbnailUrl}`}
											alt={car.name}
										/>
									</div>
									<div className="ml-4 flex-1">
										<p className={'text-sm text-gray-600 font-semibold'}>
											{car.name}{' '}
										</p>
										{/* <span
								className={`text-sm font-medium ${
									car.car_stock === 0
										? 'text-orange-500'
										: 'text-green-500'
								}`}
							>
								{car.car_stock === 0
									? 'Out of Stock '
									: car.car_stock + ' in Stock'}
							</span> */}
									</div>
									<div className="text-xs text-gray-400 pl-2">
										{car.dailyPrice}DH /day
									</div>
								</Link>
							))}
					</div>
				</>
			)}
		</div>
	);
}

export default PopularProducts;
