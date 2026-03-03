import { AuthProvider } from "./context/AuthContext";

function Home() {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
}
export default Home;