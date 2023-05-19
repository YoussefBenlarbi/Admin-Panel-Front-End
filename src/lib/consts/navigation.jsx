import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
	
} from 'react-icons/hi';
import { FcAutomotive } from 'react-icons/fc';

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />,
	},
	// {
	// 	key: 'products',
	// 	label: 'Products',
	// 	path: '/products',
	// 	icon: <HiOutlineCube />,
	// },
	{
		key: 'orders',
		label: 'Cars',
		path: '/cars',
		icon: <HiOutlineShoppingCart />,
	},
	{
		key: 'customers',
		label: 'Customers',
		path: '/customers',
		icon: <HiOutlineUsers />,
	},
	{
		key: 'transactions',
		label: 'Reservations',
		path: '/reservations',
		icon: <HiOutlineDocumentText />,
	},
	{
		key: 'messages',
		label: 'Messages',
		path: '/messages',
		icon: <HiOutlineAnnotation />,
	},
	// {
	// 	key: 'messages',
	// 	label: 'Messages',
	// 	path: '/messages',
	// 	icon: <HiOutlineAnnotation />,
	// },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	// {
	// 	key: 'settings',
	// 	label: 'Settings',
	// 	path: '/settings',
	// 	icon: <HiOutlineCog />,
	// },
	// {
	// 	key: 'support',
	// 	label: 'Help & Support',
	// 	path: '/support',
	// 	icon: <HiOutlineQuestionMarkCircle />,
	// },
];
