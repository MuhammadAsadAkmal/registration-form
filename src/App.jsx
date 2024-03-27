import './App.css';
import { Home } from './pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import { FormAddition } from './pages/formregistration/FormAddition';

function App() {
	return (
		<Routes>
			<Route
				path='/'
				element={<FormAddition />}
			/>
			{/* <Route
				path='/challan-form'
				element={<FormAddition />}
			/> */}
		</Routes>
	);
}

export default App;
