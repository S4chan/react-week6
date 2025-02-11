import { NavLink, Outlet } from "react-router-dom";

const routes = [
  { path: "/", name: "首頁" },
  { path: "/products", name: "產品列表" },
  { path: "/cart", name: "購物車" },
];

export default function FrontLayout() {
  return (
    <div>
      <nav
        className="navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container d-flex justify-content-between">
          <ul className="navbar-nav flex-row gap-5 fs-5">
            {routes.map((route) => (
              <li className="nav-item" key={route.path}>
                <NavLink className="nav-link" to={route.path}>
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="navbar-nav ms-auto fs-5">
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                登入
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
