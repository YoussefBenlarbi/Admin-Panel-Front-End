import React from 'react';
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import AuthUser from '../PrivateRoute/AuthUser';
export function SwitchToggle(props) {
	const { user } = props;
	const { http } = AuthUser();
	const [enabled, setEnabled] = useState(user.is_active ? true : false);
	async function handleToggle(id) {
		// Add your custom logic here
		console.log('Switch toggled!');
		if (enabled === false) {
			await http.patch(`/activate/${id}`);
		} else {
			await http.patch(`/desactivate/${id}`);
		}
		setEnabled(!enabled);
		window.location.reload();
	}
	return (
		<Switch
			checked={enabled}
			onChange={() => handleToggle(user.id)}
			className={`${
				enabled ? 'bg-blue-600' : 'bg-gray-200'
			} relative inline-flex h-6 w-11 items-center rounded-full`}
		>
			<span className="sr-only">Enable notifications</span>
			<span
				className={`${
					enabled ? 'translate-x-6' : 'translate-x-1'
				} inline-block h-4 w-4 transform rounded-full bg-white transition`}
			/>
		</Switch>
	);
}
