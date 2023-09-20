import React, { useState } from 'react';
import { BeatLoader, PuffLoader, RingLoader } from 'react-spinners';

export default function BeatLoaderSpinner({ height }) {
	// let [loading, setLoading] = useState(true);
	// let [color, setColor] = useState();
	return (
		<div
			className="w-full flex justify-center items-center"
			style={{ height: height }}
		>
			{/* <BeatLoader color="#36d7b7" /> */}
			{/* <RingLoader color="#2a2d2c" /> */}
			<PuffLoader color="#1b6455" />
		</div>
	);
}
