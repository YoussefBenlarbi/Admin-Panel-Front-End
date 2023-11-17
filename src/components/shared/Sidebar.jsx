import React from 'react';
import { FcAutomotive } from 'react-icons/fc';
import {
	DASHBOARD_SIDEBAR_LINKS,
	DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from '../../lib/consts/navigation';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { HiOutlineLogout } from 'react-icons/hi';
import AuthUser from '../PrivateRoute/AuthUser';

const linkClasses =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base ';
export default function Sidebar() {
	const { token, logout } = AuthUser();
	const logoutAdmin = () => {
		if (token != undefined) {
			logout();
		}
	};
	return (
		<div className="bg-neutral-900 text-white w-60 p-3 flex flex-col">
			<div className="flex items-center gap-2 px-1 py-3">
				<FcAutomotive />
				<span className="text-neutral-100 text-lg">UIR-Shope</span>
			</div>
			<div className="flex-1 py-8 flex flex-col gap-0.5">
				{DASHBOARD_SIDEBAR_LINKS.map((item) => (
					<SidebarLink item={item} key={item.key} />
				))}
			</div>
			<div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
					<SidebarLink item={item} key={item.key} />
				))}
			</div>
			<div className={classNames('text-red-500 cursor-pointer', linkClasses)} onClick={logoutAdmin}>
				<span className="text-xl">
					<HiOutlineLogout />
				</span>
				log out
			</div>
		</div>
	);
}
function SidebarLink({ item }) {
	const { pathname } = useLocation();
	return (
		<Link
			to={item.path}
			className={classNames(
				pathname === item.path
					? 'bg-neutral-700 text-white'
					: 'text-neutral-400',
				linkClasses
			)}
		>
			<span className="text-xl">{item.icon}</span>
			{item.label}
		</Link>
	);
}
