import React from 'react';
import './App.css';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CartPage from './pages/CartPage';

import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home></Home>,
	},
	{
		path: '/login',
		element: <LoginPage></LoginPage>,
	},
	{
		path: '/signup',
		element: <SignUpPage></SignUpPage>,
	},
	{
		path: '/cart',
		element: <CartPage></CartPage>,
	},
]);

function App() {
	return (
		<div className='App'>
			<RouterProvider router={router} />
			{/* <SignUpPage /> */}
		</div>
	);
}

export default App;
