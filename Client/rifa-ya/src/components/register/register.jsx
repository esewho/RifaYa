import React, { useState } from "react"
import style from "./register.module.css"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const Register = () => {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	})
	const navigate = useNavigate()

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const response = await fetch(`http://localhost:3001/user/register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			})

			const data = await response.json()
			if (response.ok) {
				toast.success("Registro exitoso")
				localStorage.setItem("token", data.token)
			} else {
				toast.error("No ha sido posible registrarse")
			}
		} catch (error) {
			console.error("Error:", error.message)
		}
	}

	return (
		<div className={style.pageContainer}>
			<div className={style.registerContainer}>
				<h1>
					<strong>Regístrese ya</strong>
				</h1>

				<form onSubmit={handleSubmit} className={style.form}>
					<div className={style.formGroup}>
						<label htmlFor="username">Nombre</label>
						<input
							id="username"
							type="text"
							name="username"
							value={formData.username}
							onChange={handleChange}
							placeholder="Tu nombre"
							required
						/>
					</div>

					<div className={style.formGroup}>
						<label htmlFor="email">Email</label>
						<input
							id="email"
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="correo@ejemplo.com"
							required
						/>
					</div>

					<div className={style.formGroup}>
						<label htmlFor="password">Contraseña</label>
						<input
							id="password"
							type="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							placeholder="••••••••"
							required
						/>
					</div>

					<button
						onClick={() => navigate("/home")}
						type="submit"
						className={style.submitButton}
					>
						Registrarse
					</button>
				</form>
			</div>
		</div>
	)
}

export default Register
