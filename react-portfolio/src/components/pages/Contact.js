import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

function Contact(props) {
    return (
        <div>
            <h1> Contact Page</h1>
            <p>
                Feel free to contact me on the links below with any questions or  comments.
            </p>
            <Link to="about" role="button" className='btn btn-link'>
                About Me
            </Link>
            /* Add links for github, linkedIn, email (possibly a form) and phone number
        </div>

    );
}

export default Contact;