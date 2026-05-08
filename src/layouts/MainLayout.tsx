import { NavLink, Outlet, useNavigate } from "react-router-dom";

function MainLayout() {
  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  const primaryColor =
    localStorage.getItem("primaryColor") || "#111827";

  const backgroundColor =
    localStorage.getItem("backgroundColor") || "#f3f4f6";

  const textColor =
    localStorage.getItem("textColor") || "#111827";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div
      className="flex min-h-screen"
      style={{ backgroundColor, color: textColor }}
    >
      <aside
        className="w-64 p-6 text-white"
        style={{ backgroundColor: primaryColor }}
      >
        <h1 className="mb-8 text-2xl font-bold">
          Library
        </h1>

        <nav className="flex flex-col gap-3">
          <NavLink
            to="/dashboard"
            className="rounded px-4 py-2 hover:bg-white hover:text-black"
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/profile"
            className="rounded px-4 py-2 hover:bg-white hover:text-black"
          >
            Profile
          </NavLink>

          <NavLink
            to="/settings"
            className="rounded px-4 py-2 hover:bg-white hover:text-black"
          >
            Settings
          </NavLink>
        </nav>
      </aside>

      <main className="flex flex-1 flex-col">
        <header className="flex items-center justify-between bg-white px-8 py-4 shadow">
          <div>
            <h2 className="text-xl font-semibold">
              Library Management System
            </h2>

            <p className="text-sm text-gray-500">
              Welcome, {username || "User"}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded px-4 py-2 text-white"
            style={{ backgroundColor: primaryColor }}
          >
            Logout
          </button>
        </header>

        <section className="p-8">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default MainLayout;