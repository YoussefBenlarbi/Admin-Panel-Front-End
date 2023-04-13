import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { ToastConfig } from '../toastConfig/success';
import AuthUser from '../PrivateRoute/AuthUser';
import { useNavigate } from 'react-router-dom';

export function AddCar() {
	const { http } = AuthUser();
	const navigate = useNavigate();
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
	function handleChange(e) {
		const { name, value } = e.target;
		setState((prev) => {
			return { ...prev, [name]: value };
		});
	}
	async function handleSubmit(e) {
		e.preventDefault();
		if (
			!name.trim() ||
			!dailyPrice.trim() ||
			!monthlyPrice.trim() ||
			!mileage.trim() ||
			!gearType.trim() ||
			!gasType.trim() ||
			!description.trim() ||
			!thumbnailUrl.trim()
		) {
			alert('Tous les champs obligatoires ');
			console.log(state);
			return;
		}
		await http.post('/cars', state);
		toast.success('Voiture bien enregistrer !', ToastConfig);
		navigate('/cars');
	}
	return (
		<div className="p-5  flex flex-col justify-center items-center  bg-neutral-100">
			<form className="w-[45%] text-sm bg-white p-5 space-between rounded-xl ">
				<h2 className="text-center text-base font-bold  text-blue-600">
					Add a new car
				</h2>
				<div className="flex flex-col ">
					<label htmlFor="name" className=" m-1">
						name
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
					<label htmlFor="dailyPrice" className="m-1">
						dailyPrice
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
					<label htmlFor="monthlyPrice" className="m-1">
						monthlyPrice
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
					<label htmlFor="mileage" className="m-1">
						mileage
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
					<label htmlFor="gearType" className="m-1">
						gearType
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
					<label htmlFor="gasType" className="m-1">
						gasType
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
					<label htmlFor="description" className="m-1">
						description
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
					<label htmlFor="nathumbnailUrlme" className="m-1">
						thumbnailUrl
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
						Ajouter voiture
					</button>
				</div>
			</form>
		</div>
	);
}
