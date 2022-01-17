import React, { FC } from 'react';

type ResumeHolder = {
    title: string
  resumeSource: string,
  
} 
let style = {
  fontWeight: "bold",
}

const Title: FC<ResumeHolder> = ({ title, resumeSource }) => {
  return (
    <div className="" style={style}>
      <div className="d-flex flex-column">
      <h2 className="p-3 mt-5" style={{ ...style, display: "block" }}>{title}</h2>
      <embed src={resumeSource} style={{height:1000, width: 900}}>
    </embed>
      </div>
      
    </div>
  );
};

export default Title;