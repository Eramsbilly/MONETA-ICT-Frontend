import { useState } from "react";
import { api } from "./api";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    await api("/register", "POST", { email, password });
    alert("Registro exitoso. Inicie sesión.");
    window.location.href = "/";
  };

  return (
    <div>
      <h2>Registro</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
      <button onClick={register}>Registrarse</button>
    </div>
  );
}
