import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Admin } from './pages/Admin'

function NotFound() {
	return <Navigate to={"/"} />;
}

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' Component={Home} />
				<Route path='/admin' Component={Admin} />
				<Route path='/*' Component={NotFound} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
