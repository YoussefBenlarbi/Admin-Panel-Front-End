import React from 'react';
import Layout from './components/shared/Layout';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Reservations from './components/Reservations';
import Customers from './components/customer/Customers';
import Cars from './components/Cars';
import { PrivateRoute } from './components/PrivateRoute';
import { EditCar } from './components/EditCar';
import { AddCar } from './components/AddCar';
// import AddCar from './components/AddCar';
import { EditReservation } from './components/EditReservation';
import UpdateCustomer from './components/customer/UpdateCustomer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<Router>
			<ToastContainer />

			<Routes>
				<Route element={<PrivateRoute />}>
					<Route path="/" element={<Layout />}>
						<Route index element={<Dashboard />} />
						<Route path="products" element={<Products />} />
						<Route path="reservations" element={<Reservations />} />
						<Route path="customers" element={<Customers />} />
						<Route path="edit-customer/:id" element={<UpdateCustomer />} />
						<Route path="cars" element={<Cars />} />
						<Route path="car/:id" element={<EditCar />} />
						<Route path="reservation/:id" element={<EditReservation />} />
						<Route path="AddCar" element={<AddCar />} />
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
