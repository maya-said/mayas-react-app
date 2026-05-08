import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    const savedUsername = localStorage.getItem("savedUsername");
    const savedPassword = localStorage.getItem("savedPassword");

    if (!savedUsername || !savedPassword) {
      alert("No account found. Please sign up first.");
      navigate("/signup");
      return;
    }

    if (username !== savedUsername || password !== savedPassword) {
      alert("Invalid username or password");
      return;
    }

    const confirmLogin = window.confirm("Are you sure you want to log in?");

    if (!confirmLogin) {
      return;
    }

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("token", "logged-in");
      localStorage.setItem("username", username);

      setLoading(false);
      navigate("/dashboard");
    }, 3000);
  };

  return (
    <div>
      <h1 className="mb-4 text-xl font-semibold">Login</h1>

      {loading ? (
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-black"></div>
          <p>Logging in...</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="rounded border px-3 py-2"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="rounded border px-3 py-2"
          />

          <button
            onClick={handleLogin}
            className="rounded bg-black px-4 py-2 text-white"
          >
            Login
          </button>

          <Link to="/signup" className="text-center text-blue-600">
            Create an account
          </Link>
        </div>
      )}
    </div>
  );
}

export default Signup;