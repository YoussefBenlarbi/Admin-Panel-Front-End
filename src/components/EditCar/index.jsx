import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ToastConfig } from '../toastConfig/success';
import AuthUser from '../PrivateRoute/AuthUser';
import { useNavigate, useParams } from 'react-router-dom';

export function EditCar() {
	const { id } = useParams();
	const { http } = AuthUser();
	const navigate = useNavigate();
	// const [car, setCar] = useState();
	const getCar = async () => {
		const apiCars = await http.get(`/cars/${id}`);
		setState({
			name: apiCars.data.name || '',
			dailyPrice: apiCars.data.dailyPrice || '',
			monthlyPrice: apiCars.data.monthlyPrice || '',
			mileage: apiCars.data.mileage || '',
			gearType: apiCars.data.gearType || '',
			gasType: apiCars.data.gasType || '',
			description: apiCars.data.description || '',
			thumbnailUrl: apiCars.data.thumbnailUrl || '',
		});
	};
	const [state, setState] = useState({
		name: '',
		dailyPrice: '',
		monthlyPrice: '',
		mileage: '',
		gearType: '',
		gasType: '',
		description: '',
		thumbnailUrl: '',
	});
	const {
		name,
		dailyPrice,
		monthlyPrice,
		mileage,
		gearType,
		gasType,
		description,
		thumbnailUrl,
	} = state;
	useEffect(() => {
		getCar();
	}, []);
	function handleChange(e) {
		const { name, value } = e.target;
		setState((prev) => {
			return { ...prev, [name]: value };
		});
	}
	async function handleSubmit(e) {
		e.preventDefault();
		if (
			!name ||
			!dailyPrice ||
			!monthlyPrice ||
			!mileage ||
			!gearType ||
			!gasType ||
			!description ||
			!thumbnailUrl
		) {
			alert('Tous les champs obligatoires ');
			// console.log(state);
			return;
		}
		await http.patch(`/cars/${id}`, state);
		toast.success('Voiture bien enregistrer !', ToastConfig);
		navigate('/cars');
	}
	return (
		<div className="p-5  flex flex-col justify-center items-center  bg-neutral-100">
			<form className="w-[45%] text-sm bg-white p-5 space-between rounded-xl flex flex-col gap-4 ">
				<h2 className="text-center text-base font-bold  text-blue-600">
					Update a new car
				</h2>
				<div className="flex flex-col ">
					<label htmlFor="name" className="m-1 font-semibold">
						Name
					</label>
					<input
						type="text"
						name="name"
						id="name"
						value={name}
						onChange={(e) => handleChange(e)}
						className="p-1  text-gray-700 focus:border-blue-500 focus:outline-none border rounded-lg focus:border-2"
					/>
				</div>
				<div className="flex flex-col ">
					<label htmlFor="dailyPrice" className="m-1 font-semibold">
						DailyPrice
					</label>
					<input
						type="text"
						id="dailyPrice"
						name="dailyPrice"
						value={dailyPrice}
						onChange={(e) => handleChange(e)}
						className="p-1  text-gray-700 focus:border-blue-500 focus:outline-none border rounded-lg focus:border-2"
					/>
				</div>
				<div className="flex flex-col ">
					<label htmlFor="monthlyPrice" className="m-1 font-semibold">
						MonthlyPrice
					</label>
					<input
						type="text"
						id="monthlyPrice"
						name="monthlyPrice"
						value={monthlyPrice}
						onChange={(e) => handleChange(e)}
						className="p-1  text-gray-700 focus:border-blue-500 focus:outline-none border rounded-lg focus:border-2"
					/>
				</div>
				<div className="flex flex-col ">
					<label htmlFor="mileage" className="m-1 font-semibold">
						Mileage
					</label>
					<input
						type="text"
						id="mileage"
						value={mileage}
						onChange={(e) => handleChange(e)}
						name="mileage"
						className="p-1  text-gray-700 focus:border-blue-500 focus:outline-none border rounded-lg focus:border-2"
					/>
				</div>
				<div className="flex flex-col ">
					<label htmlFor="gearType" className="m-1 font-semibold">
						GearType
					</label>
					<input
						type="text"
						id="gearType"
						name="gearType"
						value={gearType}
						onChange={(e) => handleChange(e)}
						className="p-1  text-gray-700 focus:border-blue-500 focus:outline-none border rounded-lg focus:border-2"
					/>
				</div>
				<div className="flex flex-col ">
					<label htmlFor="gasType" className="m-1 font-semibold">
						GasType
					</label>
					<input
						type="text"
						id="gasType"
						name="gasType"
						value={gasType}
						onChange={(e) => handleChange(e)}
						className="p-1  text-gray-700 focus:border-blue-500 focus:outline-none border rounded-lg focus:border-2"
					/>
				</div>
				<div className="flex flex-col ">
					<label htmlFor="description" className="m-1 font-semibold">
						Description
					</label>
					<input
						type="text"
						id="description"
						name="description"
						value={description}
						onChange={(e) => handleChange(e)}
						className="p-1  text-gray-700 focus:border-blue-500 focus:outline-none border rounded-lg focus:border-2"
					/>
				</div>
				<div className="flex flex-col ">
					<label htmlFor="thumbnailUrl" className="m-1 font-semibold">
						ThumbnailUrl
					</label>
					<input
						type="text"
						id="thumbnailUrl"
						name="thumbnailUrl"
						value={thumbnailUrl}
						onChange={(e) => handleChange(e)}
						className="p-1  text-gray-700 focus:border-blue-500 focus:outline-none border rounded-lg focus:border-2"
					/>
				</div>
				<div className="text-center p-1 mt-2">
					<button
						onClick={(e) => handleSubmit(e)}
						className="p-2 rounded-lg font-semibold border-indigo-600 bg-indigo-600 text-white border hover:bg-transparent hover:text-indigo-600 text-sm"
					>
						Update voiture
					</button>
				</div>
			</form>
		</div>
	);
}
