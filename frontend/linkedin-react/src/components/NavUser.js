import { FiBell, FiHome, FiUser } from "react-icons/fi";
import React from "react";

const NavUser = ({type}) => {
  return (
    <nav className="flex">
      <div className="img-logo">
        <img
          src="https://th.bing.com/th/id/R.6e154f80072e0f134105ec35599d74a6?rik=rPaegHNYFDueCw&pid=ImgRaw&r=0"
          alt="logo"
        ></img>
      </div>
      <ul className="flex">
        <li>
          <FiHome />
          <a href="">Home</a>
        </li>
        <li>
          <FiBell />
          <a href="">Notifications</a>
        </li>
        <li>
          <FiUser />
          <a href="">Me</a>
        </li>
        {
          type && <li> <button type="button" className="">Add job</button></li>
        }
      </ul>

    </nav>
  );
};

export default NavUser;
