import React, { FC } from 'react';
import NavLogo from '../NavBar/NavLogo'
import Dropdown from '../UI/Dropdown'
interface NavBar {

}
let style = {
  height: 100,
  width: "100vw",
  border: "solid grey 1px",

}
const Title: FC<NavBar> = ({ children }) => {
  return (
    <div className="d-flex align-items-end flex-fill pe-2" style={style}>
    <NavLogo/>
    <div className="d-none d-md-flex align-items-end justify-content-end flex-fill pe-2" >
      {children}
    </div>
    <div className="d-md-none p-2 me-2 d-flex flex-fill justify-content-end" >
      <Dropdown image="../../menu1.svg">
      {children}
      </Dropdown>
    </div>
    </div>
  );
};

export default Title;