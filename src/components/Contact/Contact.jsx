import React from 'react';
import styles from './Contact.module.css';

export default function Contact() {
    return (
<div className={styles.contact} id="contact">
<h1>Contact</h1>
<form accept-charset="utf-8" action="https://formspree.io/adesegunadedeji@gmail.com" method="post">
    <input type="text" name="name" placeholder="Full Name"required="" />
    <input type="email" placeholder="email" required=""/>
    <textarea name="message" id="" cols="30" rows="10" placeholder="Message" required=""></textarea>
    <input type="submit"/>
</form>
</div>
    )
}
