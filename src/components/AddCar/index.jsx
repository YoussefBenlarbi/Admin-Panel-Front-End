import React from 'react';

export function AddCar() {
	return (
		<div className="p-5  flex flex-col justify-center items-center shadow bg-gray-100">
			<form className="w-[45%]  bg-white p-5 space-between rounded-lg ">
				<h2 className="text-center text-xl font-bold font-mono text-black">Add a new car</h2>
				<div className="flex flex-col ">
					<label htmlFor="name" className='font-semibold font-mono m-1'>name</label>
					<input type="text" name="name" className="p-2 text-gray-700 focus:border-blue-500 focus:outline-none border-2 rounded-lg"  />
				</div>
				<div className="flex flex-col ">
					<label htmlFor="dailyPrice" className='font-semibold font-mono m-1'>dailyPrice</label>
					<input type="text" id="dailyPrice" className="p-2 text-gray-700 focus:border-blue-500 focus:outline-none border-2 rounded-lg" />
				</div>
				<div className="flex flex-col ">
					<label htmlFor="monthlyPrice" className='font-semibold font-mono m-1'>monthlyPrice</label>
					<input type="text" id="monthlyPrice" className="p-2 text-gray-700 focus:border-blue-500 focus:outline-none border-2 rounded-lg" />
				</div>
				<div className="flex flex-col ">
					<label htmlFor="mileage" className='font-semibold font-mono m-1'>mileage</label>
					<input type="text" id="mileage" className="p-2 text-gray-700 focus:border-blue-500 focus:outline-none border-2 rounded-lg" />
				</div>
				<div className="flex flex-col ">
					<label htmlFor="gearType" className='font-semibold font-mono m-1'>gearType</label>
					<input type="text" id="gearType" className="p-2 text-gray-700 focus:border-blue-500 focus:outline-none border-2 rounded-lg" />
				</div>
				<div className="flex flex-col ">
					<label htmlFor="gasType" className='font-semibold font-mono m-1'>gasType</label>
					<input type="text" id="gasType" className="p-2 text-gray-700 focus:border-blue-500 focus:outline-none border-2 rounded-lg" />
				</div>
				<div className="flex flex-col ">
					<label htmlFor="description" className='font-semibold font-mono m-1'>description</label>
					<input type="text" id="description" className="p-2 text-gray-700 focus:border-blue-500 focus:outline-none border-2 rounded-lg" />
				</div>
				<div className="flex flex-col ">
					<label htmlFor="nathumbnailUrlme" className='font-semibold font-mono m-1'>thumbnailUrl</label>
					<input type="text" id="thumbnailUrl" className="p-2 text-gray-700 focus:border-blue-500 focus:outline-none border-2 rounded-lg" />
				</div>
				<div className='text-center p-2'>
					<button className='p-2 rounded-lg border-indigo-600 bg-indigo-600 text-white border hover:bg-transparent hover:text-indigo-600 font-mono'>Ajouter voiture</button>
				</div>
			</form>
		</div>
	);
}
