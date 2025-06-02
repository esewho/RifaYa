import "./App.css"
import { useNavigate, Route, Routes } from "react-router-dom"
import { useEffect } from "react"
import Landing from "./components/landing/Landing"

function App() {
	const navigate = useNavigate()
	useEffect(() => {
		navigate("/landing")
	}, [])
	return (
		<Routes>
			<Route path="/home">
				<Route path="crearRifa" />
				<Route path="carrito" />
			</Route>

			<Route path="/landing" element={<Landing />}></Route>
		</Routes>
	)
}

export default App
