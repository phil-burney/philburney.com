import React, { FC } from 'react';
import  Button from "../UI/Button"
type ContactMeConfirmation = {
  

}
const Title: FC<ContactMeConfirmation> = ({  }) => {
  return (
    <div
    className="d-flex flex-column justify-content-center align-items-center"
    id="bg"
  >
    <div className="d-flex flex-column justify-content-center align-items-center p-5" id="success-box">
      <h1>SUCCESS!</h1>
      <h4>An email has been sent to Phil Burney.</h4>
      <h4>He will respond to you as soon as possible.</h4>
      <Button text="Return Home" buttonFunction={()=>{window.location.href = "/"}}></Button>
    </div>
  </div>
  );
};

export default Title;