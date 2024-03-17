import React from 'react'
import { Github, Youtube, Twitter, Linkedin, Instagram } from 'react-bootstrap-icons';

const Contact = () => {
    return (
        <div id='contact' className='mt-4 p-3'>
            <h2 className='p-4'>Contact Me</h2>
            <div className="container d-flex justify-content-around w-50 ">
                <a href="https://github.com/gangasandhu" className="btn btn-secondary"><Github /></a>
                <a href="https://www.linkedin.com/in/ganga-singh-aa482a251/" className="btn btn-primary"><Linkedin /></a>
                <a href="https://www.youtube.com/@gangasingh8637" className="btn btn-danger"><Youtube /></a>
                <a href="https://www.instagram.com/sr.gangasingh/" className="btn btn-info"><Instagram /></a>
                <a href="https://twitter.com/gangasingh003" className="btn btn-primary"><Twitter /></a>
            </div>
        </div>

    )
}

export default Contact
