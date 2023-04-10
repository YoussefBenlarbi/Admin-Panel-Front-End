import React from 'react';
import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { HiExclamationCircle } from 'react-icons/hi';

export function AlertError(props) {
	const { feedback } = props;
	return (
		<div
			className=" text-lg mb-3 mt-3
        inline-flex w-full items-center
        rounded-lg bg-red-100 px-3 py-5
        text-red-700 justify-center"
		>
			<div className="mr-2">
				<HiExclamationCircle />
			</div>
			{feedback}
			{/* Account is not active    */}
		</div>
	);
}
