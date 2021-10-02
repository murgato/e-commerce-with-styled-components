import React from "react";
import { FiIcons, HiIcons, FaIcons } from "../../util/icons";
import {
  ButtonCart,
  IconHome,
  Nav,
  QuantityCart,
  ResumeCart,
  SeachInput,
  UserIcon,
} from "./Navbar.styles";

const Navbar = () => {
  let pathname = "/";

  return (
    <Nav>
      <IconHome>
        {pathname === "/" ? <HiIcons.HiHome /> : <HiIcons.HiOutlineHome />}
      </IconHome>
      <SeachInput></SeachInput>
      <ButtonCart>
        <FiIcons.FiShoppingCart />
      </ButtonCart>
      <QuantityCart> 0 </QuantityCart>
      <ResumeCart collapsed={false}>test</ResumeCart>
      <UserIcon>
        <FaIcons.FaUserAlt />
      </UserIcon>
    </Nav>
  );
};

export default Navbar;
