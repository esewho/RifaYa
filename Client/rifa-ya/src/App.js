import "./App.css"
import { useNavigate, Route, Routes } from "react-router-dom"
import { useEffect } from "react"
import Landing from "./components/landingPage/landing"
import Register from "../src/components/register/register"
import Login from "../src/components/login/login"

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
			<Route path="/register" element={<Register />}></Route>
			<Route path="/login" element={<Login />}></Route>
		</Routes>
	)
}

export default App
