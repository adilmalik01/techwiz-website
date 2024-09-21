import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-info">
                <div className="info-box">
                    <div className="icon">&#128205;</div>
                    <h3>Our Main Office</h3>
                    <p>SoHo 94 Broadway St<br />New York, NY 1001</p>
                </div>
                <div className="info-box">
                    <div className="icon">&#9743;</div>
                    <h3>Phone Number</h3>
                    <p>234-9876-5400<br />888-0123-4567 (Toll Free)</p>
                </div>
                <div className="info-box">
                    <div className="icon">&#128224;</div>
                    <h3>Fax</h3>
                    <p>1-234-567-8900</p>
                </div>
                <div className="info-box">
                    <div className="icon">&#9993;</div>
                    <h3>Email</h3>
                    <p><a href="mailto:hello@theme.com">hello@theme.com</a></p>
                </div>
            </div>

            <div className="contact-form-container">
                <h2>Contact Us</h2>
                <form>
                    <input type="text" placeholder="Enter your Name" required />
                    <input type="email" placeholder="Enter a valid email address" required />
                    <textarea placeholder="Your message here" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
