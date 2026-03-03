import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const { user, login, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home Page</h2>

      {user ? (
        <>
          <h3>Welcome {user}</h3>
          <button onClick={() => navigate("/dashboard")}>
            Go to Dashboard
          </button>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}

export default Home;