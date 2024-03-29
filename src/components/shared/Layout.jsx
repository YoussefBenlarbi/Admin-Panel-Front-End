import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
function Layout() {
	return (
		<div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
			<Sidebar />{' '}
			<div className="flex-1 h-screen flex flex-col">
				<Header />
				<div className='p-4 min-h-0 overflow-auto'>{<Outlet />}</div>
			</div>
		</div>
	);
}

export default Layout;
