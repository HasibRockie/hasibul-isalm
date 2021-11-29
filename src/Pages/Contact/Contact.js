import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <h1 style={{fontSize:"60px"}}>Contact </h1>
            <form>
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="" id="" cols="30" rows="10" required placeholder="Type Your Message"></textarea>
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default Contact;