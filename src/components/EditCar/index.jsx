import React from 'react';
import { useParams } from 'react-router-dom';

export function EditCar() {
    const {id} =useParams();
	return <div>
        test  {id}
    </div>;
}
