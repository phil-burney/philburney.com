import React, { FC } from 'react';

type ImageHolder = {
  imageSource: string,
  caption: string
} & {
  height?: string;
}
let style = {
  maxWidth: 600,
  fontWeight: "bold"
}

const Title: FC<ImageHolder> = ({ imageSource, caption, height }) => {
  return (
    <div className="" style={style}>
      <div className="d-flex flex-column">
        <img style={{ height: height, display: "block", objectFit: "cover" }} className="img-fluid rounded " src={imageSource}></img>
      </div>
      <span style={{ display: "block" }}>{caption}</span>
    </div>
  );
};

export default Title;