import React from 'react';
import './App.css';
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailsPage from './pages/ProductDetailsPage';

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
	{
		path: '/checkout',
		element: <Checkout></Checkout>,
	},
	{
		path: '/product-details',
		element: <ProductDetailsPage></ProductDetailsPage>,
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
