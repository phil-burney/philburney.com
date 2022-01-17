import React, { FC } from 'react';

interface NavBar {

}
let style = {
  height: 100,
  width: "100vw",
  border: "solid grey 1px",
  
}
const Title: FC<NavBar> = ({ children }) => {
  return (
    <div className="d-flex align-items-end justify-content-end flex-fill" style={style}>
      {children}
    </div>
  );
};

export default Title;