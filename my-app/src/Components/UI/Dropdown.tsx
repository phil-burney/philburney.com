import React, { FC } from 'react';

interface DropdownProps {
  image: string;
}

let imgDimensions = 50;


let style:React.CSSProperties = {
    width: imgDimensions,
    height: imgDimensions,
    borderRadius: "50%",
    border: "solid grey 1px",
    background: "#eee"


}

let dropDownStyle:React.CSSProperties = {
  position: "absolute",
  backgroundColor: "#fff",
  display: "none",
      flexFlow: "column",
      minWidth: 150,
      // zIndex: 1,
      marginTop: imgDimensions - 10,
      marginLeft: -150,
  border: "grey solid 1px"
}
let reset = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
  event.currentTarget.style.background = "#eee"
  let element1 = event.currentTarget.children.item(1) as HTMLElement
  element1.style.display = "none"
  console.log(event.currentTarget.children)
}
let mouseover = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
  event.currentTarget.style.background = "#aaa"
  let element1 = event.currentTarget.children.item(1) as HTMLElement
  element1.style.display = "flex"
}



const Title: FC<DropdownProps> = ({image, children}) => {
  return (
    <div>
    <div className="d-flex p-2"  onMouseOver={mouseover} onMouseLeave={reset} style={style}>
        <img src={image} className='img-fluid  rounded'></img>
        <div style={dropDownStyle} className='pt-2'>
          <div style={{height:10, backgroundColor:"rgba(10,10,10,0.0)" }}></div>
          {children}
        </div>
    </div>
    </div>
  );
};

export default Title;