import React from 'react';
import { Link } from 'react-router-dom';

function Cars() {
	return (
		<div>
			This is Cars
			<Link to={'/'} className="ml-3 text-red-500 underline">
				go to Dashboard page{' '}
			</Link>
		</div>
	);
}

export default Cars;
