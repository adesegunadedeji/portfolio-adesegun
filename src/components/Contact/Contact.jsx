import React from 'react';
import styles from './Contact.module.css';

export default function Contact() {
    return (
<div className={styles.contact} id="contact">
<h1>Contact</h1>
<form>
    <input type="text" name="name" placeholder="Full Name"/>
    <input type="email" placeholder="email"/>
    <textarea name="message" id="" cols="30" rows="10" placeholder="Message"></textarea>
    <input type="submit"/>
</form>
</div>
    )
}
