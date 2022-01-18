import React, { FC } from 'react';

type PortfolioHolder = {
  title: string
  imageSource: string
  description: string
  language: string
  frameworks: string
  link: string
  text:string

}
let style = {
  border: "solid grey 1px",
  maxWidth: 1200,
  fontSize: 18
}
let imgstyle = {
  maxHeight: 600,
  borderRadius: "20px",
  border: "solid grey 1px"
}

const Title: FC<PortfolioHolder> = ({ title, imageSource, description, language, frameworks, link,text }) => {
  return (
    <div className="my-3 d-flex flex-column" style={style}>
      <h2 className="p-3">{title}</h2>
      <div className="m-3">
        <img style={imgstyle} className="img-fluid" src={imageSource}></img>
      </div>
      <div className='p-4 ps-5'>
        <table >
          <tbody className="text-start">
            <tr>
              <td>Description:</td>
              <td>{description}</td>
            </tr>
            <tr>
              <td>Language(s) Used:</td>
              <td>{language}</td>
            </tr>
            <tr >
              <td className='pe-3'>Framework(s) Used:</td>
              <td>{frameworks}</td>
            </tr>
            <tr>
              <td>Link:</td>
              <td><a href = {link}>{text}</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


  )
}

export default Title;