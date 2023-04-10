import React from 'react';
import Layout from './components/shared/Layout';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Reservations from './components/Reservations';
import Customers from './components/Customers';
import Cars from './components/Cars';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
	return (
		// <Router>
		// 	<Routes>
		// 		<Route path="/" element={<Layout />}>
		// 			<Route index element={<Dashboard />} />
		// 			<Route path="products" element={<Products />} />
		// 			<Route path="reservations" element={<Reservations />} />
		// 			<Route path="customers" element={<Customers />} />
		// 			<Route path="cars" element={<Cars />} />
		// 		</Route>
		// 		<Route>
		// 			<Route path="login" element={<Login />}></Route>
		// 		</Route>
		// 	</Routes>
		// </Router>
		<Router>
			<Routes>
				<Route element={<PrivateRoute />}>
					<Route path="/" element={<Layout />}>
						<Route index element={<Dashboard />} />
						<Route path="products" element={<Products />} />
						<Route path="reservations" element={<Reservations />} />
						<Route path="customers" element={<Customers />} />
						<Route path="cars" element={<Cars />} />
					</Route>
				</Route>
				<Route>
					<Route path="login" element={<Login />}></Route>
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
