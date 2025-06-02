import React from "react"
import { useNavigate } from "react-router-dom"
import style from "./landing.module.css"
import { useState } from "react"

export default function Landing() {
	const navigate = useNavigate()
	return (
		<div className={style.landingContainer}>
			<div className={style.landingBox}>
				<h1>¡Bienvenido a RifaYa!</h1>
				<p>
					Participa en rifas, gana premios y diviértete desde cualquier lugar.
				</p>
			</div>

			<div className={style.landingBox}>
				<h1>¿Nuevo aquí?</h1>
				<button
					onClick={() => navigate("/createUser")}
					className={style.landingButton}
				>
					Registrarse
				</button>
			</div>

			<div className={style.landingBox}>
				<h1>¿Ya tienes cuenta?</h1>
				<button
					onClick={() => navigate("/logUser")}
					className={style.landingButton}
				>
					Iniciar sesión
				</button>
			</div>
		</div>
	)
}
