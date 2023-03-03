import React from 'react';
import Contact from './Contact';

function About() {
    return (
        <div>
            <h1>About Me</h1>
            <p>
                Here i should write some information about myself.
                possibly including a link to my CV,
            </p>
            <Link to="contact" role="button" className="btn btn-link">
                Contact Me
            </Link>
            <Routes>
                <Route path="contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default About;