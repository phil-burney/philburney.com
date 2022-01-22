import React, { FC } from 'react';

interface NavLogoProps {

}
let style = {
    height:90,
    
}
const Title: FC<NavLogoProps> = ({  }) => {
  return (
    <div className='d-flex flex-fill justify-content-start px-3'><a href="/"><img style={style} className="img-flex p-1" src="../../logopb2.svg"></img></a></div>
  );
};

export default Title;