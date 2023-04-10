import React from 'react';
import { Link } from 'react-router-dom';

function Reservations() {
	return (
		<div>
			This is Reservations
			<Link to={'/'} className="ml-3 text-red-500 underline">
				go to Dashboard page{' '}
			</Link>
		</div>
	);
}

export default Reservations;