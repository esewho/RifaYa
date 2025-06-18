import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export default function Login() {
	const [formData, setFormData] = useState({
		email: "",
		passsword: "",
	})

	const navigate = useNavigate()

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const response = await fetch(`http://localhost:3001/user/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			})
			const data = await response.json()
			if (response.ok) {
				toast.success("¡Login exitoso!")
				localStorage.setItem("token", data.token)
			} else {
				toast.error("Error al iniciar sesión")
			}
		} catch (error) {
			throw new Error({ error: error.message })
		}
	}

	return <div></div>
}
