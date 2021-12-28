import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => (
  <nav>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link to="/admin/dashboard" className="nav-link text-danger">
          Orders
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/product" className="nav-link text-warning">
          +Product
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/products" className="nav-link text-success">
          Products
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/category" className="nav-link text-info">
          Category
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/sub" className="nav-link text-danger">
          Sub Category
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/coupon" className="nav-link text-warning">
          Coupon
        </Link>
      </li>

      {/* <li className="nav-item">
        <Link to="/user/password" className="nav-link">
          Password
        </Link>
      </li> */}
    </ul>
  </nav>
);

export default AdminNav