import { render } from '@testing-library/react';
import React, { FC } from 'react';
import Button from '../UI/Button'

type Props = {

}
type State = {

    email: string,
    subject: string,
    message: string

    errorEmail: string,
    errorSubject: string,
    errorMessage: string

}
export default class ContactMe extends React.Component<Props, State> {
    style = {
        maxWidth: 800,
        fontSize: 18,
        fontFamily: 'Roboto, sans-serif',

    }
    textareastyle = {
        width: "100%",
        height: "100%",
        alignContent: "stretch",
        fontFamily: 'Roboto, sans-serif',
    }
    state = {
        email: "",
        subject: "",
        message: "",
        errorEmail: "",
        errorSubject: "",
        errorMessage: ""
    }



    setEmail = (event: React.FocusEvent<HTMLInputElement>) => {
        console.log("boo")
        this.setState({ email: event.target.value });
    };
    setSubject = (event: React.FocusEvent<HTMLInputElement>) => {
        this.setState({ subject: event.target.value });
    }
    setMessage = (event: React.FocusEvent<HTMLTextAreaElement>) => {
        this.setState({ message: event.target.value });
    }
    submitForm() {

        if (this.validateForm() == false) {
            return;
        }
        console.log("request sent!")
        const options: RequestInit = {
            method: "POST",
            mode: "cors",
            credentials: "include",
            body: JSON.stringify({
                email: this.state.email,
                subject: this.state.subject,
                message: this.state.message
            })
        }
        console.log(options)
        fetch("http://localhost:8000/user/email/query", options).then((res) => res.json()).then((data) =>console.log(data)).catch((err) => console.log(err))

    }
    resetForm() {
        this.setState({
            errorMessage: "",
            errorSubject: "",
            errorEmail: ""
        })
        let x = document.getElementById("n-email");
        x!.classList.remove("error");
        let y = document.getElementById("n-subject");
        y!.classList.remove("error");
        let z = document.getElementById("n-message");
        z!.classList.remove("error");


    }
    validateForm() {
        this.resetForm()
        let validform = true;
        console.log(this.state)
        if (this.state.email === "") {
            let y = document.getElementById("n-email");
            y!.classList.add("error");
            this.setState({ errorEmail: "Email required!" });
            validform = false;
        }
        if (this.state.subject === "") {
            let z = document.getElementById("n-subject");
            z!.classList.add("error");
            this.setState({ errorSubject: "Subject required!" });
            validform = false;
        }
        if (this.state.message === "") {
            let z = document.getElementById("n-message");
            z!.classList.add("error");
            this.setState({ errorMessage: "Message required!" });
            validform = false;
        }

        return validform;
    }

    render() {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center p-3-sm p-5-md">
                <h1 className='p-2'>Contact Me</h1>
                <div style={this.style} className="d-flex-inline flex-column justify-content-center align-items-center">
                    <span>Questions, comments, or would you like to schedule an interview? Either submit the form below or send an email to
                        peburney@gmail.com!</span>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-start" style={{ width: "70%", maxWidth: 800 }}>
                    <label className="form-label">Email address</label>
                    <input id="n-email" onChange={this.setEmail} style={this.textareastyle} type="email" className="p-2" placeholder="name@example.com"></input>
                    <div className="p-1" style={{ minHeight: 40, color: "red", fontWeight: "bold" }}>{this.state.errorEmail}</div>

                    <label className="form-label">Subject</label>
                    <input id="n-subject" onChange={this.setSubject} style={this.textareastyle} type="text" className="p-2" placeholder="Subject"></input>
                    <div className="p-1" style={{ minHeight: 40, color: "red", fontWeight: "bold" }}>{this.state.errorSubject}</div>

                    <label className="form-label">Message</label>
                    <textarea id="n-message" onChange={this.setMessage} className="p-2" placeholder="Put your message here!" style={this.textareastyle} ></textarea>
                    <div className="p-1" style={{ minHeight: 40, color: "red", fontWeight: "bold" }}>{this.state.errorMessage}</div>
                    <Button text="Submit" buttonFunction={this.submitForm.bind(this)} />

                </div>


            </div>
        );
    };

}