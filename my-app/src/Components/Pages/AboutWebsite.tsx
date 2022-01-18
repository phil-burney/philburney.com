import React, { FC } from 'react';

type AboutWebsite = {

}
let style = {
    maxWidth: 1200,
    fontSize: 18,
    fontFamily: 'Roboto, sans-serif',

}
const Title: FC<AboutWebsite> = ({ }) => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center p-5">
            <h1>About the Website</h1>
            <div style = {style} className="d-flex-inline flex-column justify-content-center align-items-center p-5">
                This website was created over the course of three days using the React framework in 
                conjunction with Bootstrap 5.0.  The coding language Typescript was used for the front end of the website.
                The coding language Python and the framework Django was used for the API.  To view the source code, click <a href = "https://github.com/phil-burney/mywebsite2">here.</a>
            </div>

        </div>
    );
};

export default Title;