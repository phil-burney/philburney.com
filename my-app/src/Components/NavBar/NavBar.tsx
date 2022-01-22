import React, { FC } from 'react';
import NavLogo from '../NavBar/NavLogo'

interface NavBar {

}
let style = {
  height: 100,
  width: "100vw",
  border: "solid grey 1px",
  
}
const Title: FC<NavBar> = ({ children }) => {
  return (
    <div className="d-flex align-items-end justify-content-end flex-fill pe-2" style={style}>
    <NavLogo/>
    <div className="d-none d-md-flex align-items-end justify-content-end flex-fill pe-2" >
      
      {children}
    </div>
    </div>
  );
};

export default Title;