import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ToastConfig } from '../toastConfig/success';
import AuthUser from '../PrivateRoute/AuthUser';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export function EditCar() {
	const { id } = useParams();
	const { http, token } = AuthUser();
	const navigate = useNavigate();
	const [selectedFile, setSelectedFile] = useState(null);

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
			// thumbnailUrl: apiCars.data.thumbnailUrl || '',
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
		// thumbnailUrl: '',
	});
	const {
		name,
		dailyPrice,
		monthlyPrice,
		mileage,
		gearType,
		gasType,
		description,
		// thumbnailUrl,
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
	const handleImageChange = (event) => {
		// Log the selected file object
		console.log('Selected file:', event.target.files[0]);

		setSelectedFile(event.target.files[0]);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData();
		formData.append('name', name);
		formData.append('dailyPrice', dailyPrice);
		formData.append('monthlyPrice', monthlyPrice);
		formData.append('mileage', mileage);
		formData.append('gearType', gearType);
		formData.append('gasType', gasType);
		formData.append('description', description);
		if (selectedFile) {
			const imageName =
				'image-' + Date.now() + '.' + selectedFile.name.split('.').pop();
			formData.append('thumbnailUrl', selectedFile, imageName);
		}

		try {
			const response = await axios.put(
				`http://localhost:8000/api/cars/${id}`,
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
						'Authorization': `Bearer ${token}`,
					},
				}
			);
			console.log(response.data);
			toast.success('Car successfully registered !', ToastConfig);

			navigate('/cars');
		} catch (error) {
			console.log(error.response.data);
		}
	};
	return (
		<div className="p-5  flex flex-col justify-center items-center  bg-neutral-100">
			<div className="w-[45%] text-sm bg-white p-5 space-between rounded-xl ">
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
					<label htmlFor="thumbnailUrl" className="m-1">
						thumbnailUrl
					</label>
					<input
						type="file"
						id="thumbnailUrl"
						name="thumbnailUrl"
						// value={thumbnailUrl}
						onChange={(e) => handleImageChange(e)}
						className="p-1  text-gray-700  focus:outline-none rounded-lg "
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
			</div>
		</div>
	);
}
