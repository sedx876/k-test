// import React, { useState } from "react";
// import { Menu } from "antd";
// import {
//   AppstoreOutlined,
//   SettingOutlined,
//   UserOutlined,
//   UserAddOutlined,
//   LogoutOutlined,
// } from "@ant-design/icons";
// import { Link } from "react-router-dom"
// //import firebase from 'firebase/compat/app'
// import firebase from "firebase";
// import { useDispatch, useSelector } from "react-redux"
// //import { useNavigate } from "react-router-dom"
// import { useHistory } from "react-router-dom";

// const { SubMenu, Item } = Menu;

// const Header = () => {
//   const [current, setCurrent] = useState("home")
//   let dispatch = useDispatch()
//   //let navigate = useNavigate()
//   let { user } = useSelector((state) => ({ ...state }))
//   let history = useHistory()

//   const handleClick = (e) => {
//     // console.log(e.key);
//     setCurrent(e.key);
//   }

//   const logout = () => {
//     firebase.auth().signOut();
//     dispatch({
//       type: "LOGOUT",
//       payload: null,
//     });
//     //navigate("/login");
//     history.push("/login")
//   }

//   return (
//     <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
//       <Item key="home" icon={<AppstoreOutlined />}>
//         <Link to="/">Kline Shop</Link>
//       </Item>

//       {!user && (
//         <Item key="register" icon={<UserAddOutlined />} className="float-right">
//           <Link to="/register">Register</Link>
//         </Item>
//       )}

//       {!user && (
//         <Item key="login" icon={<UserOutlined />} className="float-right">
//           <Link to="/login">Login</Link>
//         </Item>
//       )}

//       {user && (
//         <SubMenu
//           icon={<SettingOutlined />}
//           title={user.email && user.email.split("@")[0]}
//           className="float-right"
//         >
//           <Item key="setting:1">Option 1</Item>
//           <Item key="setting:2">Option 2</Item>
//           <Item icon={<LogoutOutlined />} onClick={logout}>
//             Logout
//           </Item>
//         </SubMenu>
//       )}
//     </Menu>
//   );
// };

// export default Header;



import React, { useState } from "react";
import { Menu, Badge } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Search from "../forms/Search";
import favicon1 from '../../images/favicon1.ico'

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  let dispatch = useDispatch();
  let { user, cart } = useSelector((state) => ({ ...state }));

  let history = useHistory();

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };
//icon={<AppstoreOutlined />}
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="home" >
      <img src={favicon1} alt="kline" style={{height: "20px", width: "25px"}}/>
        <Link className="text-info" to="/">Kline Shop</Link>
      </Item>

      <Item className="text-success" key="shop" icon={<ShoppingOutlined />}>
        <Link className="text-success" to="/shop">Shop</Link>
      </Item>

      <Item className="text-danger" key="cart" icon={<ShoppingCartOutlined />}>
        <Link className="text-danger" to="/cart">
          <Badge count={cart.length} offset={[9, 0]}>
            Cart
          </Badge>
        </Link>
      </Item>

      {!user && (
        <Item key="register" icon={<UserAddOutlined />} className="float-right">
          <Link to="/register">Register</Link>
        </Item>
      )}

      {!user && (
        <Item key="login" icon={<UserOutlined />} className="float-right">
          <Link to="/login">Login</Link>
        </Item>
      )}

      {user && (
        <SubMenu
          icon={<SettingOutlined />}
          title={ user.email && user.email.split("@")[0]}
          className="float-right text-secondary"
        >
          {user && user.role === "subscriber" && (
            <Item>
              <i class="fas fa-user"></i>
              <Link to="/user/history"> Dashboard</Link>
            </Item>
          )}

          {user && user.role === "admin" && (
            
              <Item>
                <i class="fas fa-toolbox"></i>
                <Link to="/admin/dashboard"> Admin Dashboard</Link>
              </Item>   
          )}

          {user && user.role === "admin" && (
                <Item>
                  <i class="fas fa-user"></i>
              <Link to="/user/history"> Customer Dashboard</Link>
            </Item>
              )}

          <Item icon={<LogoutOutlined />} onClick={logout}>
            Logout
          </Item>
        </SubMenu>
      )}

      <span className="float-right p-1">
        <Search />
      </span>
    </Menu>
  );
};

export default Header;