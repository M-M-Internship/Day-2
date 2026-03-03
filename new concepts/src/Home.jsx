import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function Home() {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome {user}</h1>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}

export default Home;