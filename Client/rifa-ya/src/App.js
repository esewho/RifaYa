import "./App.css"
import { useNavigate, Route, Routes } from "react-router-dom"
import { useEffect } from "react"
import Landing from "./components/landing/landing"
import Register from "../src/components/register/register"

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
			<Route path="/createUser" element={<Register />}></Route>
		</Routes>
	)
}

export default App
