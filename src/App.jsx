import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { AddCar } from './components/AddCar';
import Cars from './components/Cars';
import Dashboard from './components/Dashboard';
import { EditCar } from './components/EditCar';
// import Login2 from './components/Login';
import Login from './components/Login';
import { PrivateRoute } from './components/PrivateRoute';
import Products from './components/Products';
import Reservations from './components/Reservations';
import Customers from './components/customer/Customers';
import Layout from './components/shared/Layout';
// import AddCar from './components/AddCar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EditReservation } from './components/EditReservation';
import UpdateCustomer from './components/customer/UpdateCustomer';
import AddCustomer from './components/customer/AddCustomer';
import Messages from './components/Messages';

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
						<Route path="add-customer" element={<AddCustomer />} />
						<Route path="edit-customer/:id" element={<UpdateCustomer />} />
						<Route path="cars" element={<Cars />} />
						<Route path="car/:id" element={<EditCar />} />
						<Route path="reservation/:id" element={<EditReservation />} />
						<Route path="AddCar" element={<AddCar />} />
						<Route path="messages" element={<Messages />} />
					</Route>
				</Route>
				<Route>
					<Route path="login" element={<Login />}></Route>
					{/* <Route path="login2" element={<Login2 />}></Route> */}
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
