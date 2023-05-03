import React from 'react';
import {
	HiOutlineBell,
	HiOutlineChatAlt,
	HiOutlineSearch,
} from 'react-icons/hi';
import { Popover, Transition, Menu } from '@headlessui/react';
import { Fragment } from 'react';
import classNames from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import AuthUser from '../PrivateRoute/AuthUser';
import profilPictureMale from '../../assets/adminMale2.png';
export default function Header() {
	const navigate = useNavigate();
	const { token, logout } = AuthUser();

	const logoutAdmin = () => {
		if (token != undefined) {
			logout();
		}
	};

	return (
		<div className="bg-white h-16 px-4 p-2  flex justify-end  items-center border-b border-gray-200 pr-8">
			{/* <div className="relative">
				<HiOutlineSearch
					fontSize={20}
					className="text-gray-400 left-3 absolute top-1/2 -translate-y-1/2"
				/>
				<input
					type="text"
					placeholder="Search..."
					className="text-sm pl-11 focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm px-4 "
				/>
			</div> */}
			<div className="flex flex-row items-center gap-2 mr-2 ">
				<Popover className="relative">
					{({ open }) => (
						<>
							<Popover.Button
								className={classNames(
									open && 'bg-gray-100',
									'inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100 p-1.5 rounded-sm '
								)}
							>
								<HiOutlineChatAlt fontSize={24} className="cursor-pointer" />
							</Popover.Button>
							<Transition
								as={Fragment}
								enter="transition ease-out duration-200"
								enterFrom="opacity-0 translate-y-1"
								enterTo="opacity-100 translate-y-0"
								leave="transition ease-in duration-150"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-1"
							>
								<Popover.Panel className="absolute right-0 z-10 mt-2.5 w-60">
									<div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5  px-2 py-2.5">
										<strong className="text-gray-700 font-medium">
											Messages
										</strong>
										<div className="mt-2 py-1 text-sm">messages panel</div>
									</div>
								</Popover.Panel>
							</Transition>
						</>
					)}
				</Popover>
				<Popover className="relative">
					{({ open }) => (
						<>
							<Popover.Button
								className={classNames(
									open && 'bg-gray-100',
									'inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100 p-1.5 rounded-sm '
								)}
							>
								<HiOutlineBell fontSize={24} className="cursor-pointer" />
							</Popover.Button>
							<Transition
								as={Fragment}
								enter="transition ease-out duration-200"
								enterFrom="opacity-0 translate-y-1"
								enterTo="opacity-100 translate-y-0"
								leave="transition ease-in duration-150"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-1"
							>
								<Popover.Panel className="absolute right-0 z-10 mt-2.5 w-60">
									<div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5  px-2 py-2.5">
										<strong className="text-gray-700 font-medium">
											Notifications
										</strong>
										<div className="mt-2 py-1 text-sm">messages panel</div>
									</div>
								</Popover.Panel>
							</Transition>
						</>
					)}
				</Popover>
				<Menu as="div" className="relative inline-block text-left mr-4 p-2">
					<div className="">
						<Menu.Button className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
							<span className="sr-only">Open user Menu</span>
							<img
								src={profilPictureMale}
								alt="profil"
								className="h-8 w-8  rounded-full bg-sky-500 object-cover bg-cover bg-no-repeat"
							/>
						</Menu.Button>
					</div>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
							<Menu.Item>
								{({ active }) => (
									<div
										className={classNames(
											active && 'bg-gray-100',
											'text-gray-700 focus:bg-gray-300 cursor-pointer rounded-sm px-4 py-2'
										)}
										onClick={() => navigate('/profile')}
									>
										Your profile
									</div>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<div
										className={classNames(
											active && 'bg-gray-100',
											'text-gray-700 focus:bg-gray-300 cursor-pointer rounded-sm px-4 py-2'
										)}
										onClick={() => navigate('/settings')}
									>
										settings
									</div>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<div
										className={classNames(
											active && 'bg-gray-100',
											'text-gray-700 focus:bg-gray-300 cursor-pointer rounded-sm px-4 py-2'
										)}
										onClick={logoutAdmin}
									>
										logout
									</div>
								)}
							</Menu.Item>
						</Menu.Items>
					</Transition>
				</Menu>
			</div>
		</div>
	);
}
