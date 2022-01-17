import React, { FC } from 'react';

interface ButtonProps {
  text: string;
  buttonFunction: Function;
}



let style:React.CSSProperties = {
    color: "white",
    fontFamily: 'Roboto, sans-serif',
    background: "#222",
    borderRadius: 10,
    fontSize: 20,
    border: "solid black 2px"
  
    
}
let reset = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.currentTarget.style.background = "#222"
    event.currentTarget.style.color = "white"
}
let mouseover = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {

    event.currentTarget.style.background = "grey"
    event.currentTarget.style.color = "black"


}
function mousedown(event: React.MouseEvent<HTMLElement, MouseEvent>) {

    event.currentTarget.style.background = "black"
    event.currentTarget.style.color = "grey"
    


}

const Title: FC<ButtonProps> = ({text, buttonFunction}) => {
  return (
      <div className="p-2 mb-2" onMouseOut = {reset} onMouseOver={mouseover} onMouseDown={(event) => {mousedown(event); buttonFunction()}} onMouseUp={reset} style={style}>
    <span>{text}</span>
    </div>
  );
};

export default Title;