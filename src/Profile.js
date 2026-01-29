export default function Profile() {
  return (
    <div>
      <h2>👤 Mi Cuenta</h2>
      <p>Email: usuario@email.com</p>
      <p>País: Colombia 🇨🇴</p>
      <button onClick={() => {
        localStorage.clear();
        window.location.href = "/";
      }}>Cerrar sesión</button>
    </div>
  );
}
