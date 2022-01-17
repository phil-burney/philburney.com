import React, { FC } from 'react';
import ResumeHolder from "./Display/ResumeHolder"
type Resume = {

}
let style = {
    fontFamily: 'Roboto, sans-serif',

}
const Title: FC<Resume> = ({ }) => {
    return (
        <div style = {style} className="d-flex flex-column justify-content-center align-items-center p-5">
            <h1>Resumes</h1>
            <div  className="d-flex-inline flex-column justify-content-center align-items-center p-5">
                <ResumeHolder title="Java Developer" resumeSource='../../resumes/java_developer_resume.pdf'/>
                <ResumeHolder title="Front End Developer" resumeSource='../../resumes/front_end_resume.pdf'/>
                <ResumeHolder title="Back End Developer" resumeSource='../../resumes/back_end_resume.pdf'/>
                <ResumeHolder title="Full Stack Developer" resumeSource='../../resumes/full_stack_resume.pdf'/>
            </div>

        </div>
    );
};

export default Title;