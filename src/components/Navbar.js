import React, { useState } from "react";
import styles from "../style/Navbar.module.css";
import Logo from "../image/logo.png";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className={styles.navbar} style={{ border: "2px solid black" }}>
      <img src={Logo} alt="" />
      <nav>
        <ul
          className={
            nav ? [styles.menu, styles.active].join(" ") : [styles.menu]
          }
        >
          <li>
            <a href="/">Learn More</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/">SignUp</a>
          </li>
          <li>
            <AiOutlineUser size={25} style={{ marginTop: "6px" }} />
          </li>
          <li>
            <AiOutlineSearch size={25} style={{ marginTop: "6px" }} />
          </li>
        </ul>
      </nav>
      <div onClick={() => setNav(!nav)} className={styles.mobile}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </header>
  );
};

export default Navbar;
