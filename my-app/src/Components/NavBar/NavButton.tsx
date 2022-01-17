import React, { FC } from 'react';

interface NavButtonProps {
  text: string;
  link: string
}
let style:React.CSSProperties = {
    textDecoration: "none",
    color: "black",
    fontFamily: 'Roboto, sans-serif',
    background: "",
    whiteSpace:"nowrap",
    borderRadius: 10,
    fontSize: 20,
  
    
}
let underlinestyle:React.CSSProperties = {
    height: 4,
    backgroundColor:"",
    position: "relative",
    top: 15,
    borderRadius: 5
    
}
let reset = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    //event.currentTarget.children.style.background = ""
    let element = event.currentTarget.children.item(0) as HTMLElement
    element.style.background = ""
    let element1 = event.currentTarget.children.item(1) as HTMLElement
    element1.style.background = ""
}
let mouseover = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    let element = event.currentTarget.children.item(0) as HTMLElement
    element.style.background = "grey"
    let element1 = event.currentTarget.children.item(1) as HTMLElement
    element1.style.background = "black"

}
const Title: FC<NavButtonProps> = ({ link, text }) => {
  return (
      <div className="p-2 mb-2" onMouseOut = {reset} onMouseOver={mouseover}>
    <a  className="p-2 m-1 align-bottom" href={link} style={style}>{text}</a>
    <div style={underlinestyle}></div>
    </div>
  );
};

export default Title;