import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from '../../routes/pages/AboutUs';
import Hotel from '../../routes/pages/Hotel';
import ContactUs from '../../routes/pages/ContactUs';
import Rooms from '../../routes/pages/Rooms';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<AboutUs />} />
				<Route path='/hotel' element={<Hotel />} />
				<Route path='/contact' element={<ContactUs />} />
				<Route path='/rooms' element={<Rooms />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
