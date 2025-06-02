import React, { useState } from "react"
import style from "./register.module.css"
import { toast } from "react-hot-toast"

const Register = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	})

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		toast.success("Registro exitoso")
	}

	return (
		<div className={style.pageContainer}>
			<div className={style.registerContainer}>
				<h1>
					<strong>Regístrese ya</strong>
				</h1>

				<form onSubmit={handleSubmit} className={style.form}>
					<div className={style.formGroup}>
						<label htmlFor="name">Nombre</label>
						<input
							id="name"
							type="text"
							name="name"
							value={formData.name}
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

					<button type="submit" className={style.submitButton}>
						Registrarse
					</button>
				</form>
			</div>
		</div>
	)
}

export default Register
