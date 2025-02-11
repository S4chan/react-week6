import { NavLink, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div>
      <nav
        className="navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container">
          <ul className="navbar-nav flex-row gap-5 fs-5">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/admin/products"
              >
                後臺產品頁面
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/admin/orders"
              >
                訂單頁面
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
