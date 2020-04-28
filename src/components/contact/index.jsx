import React from 'react';

export default function Contact() {
    return (
<div className="container contact" id="contact">
<h1>Contact</h1>
<form>
    <input type="text" name="name" placeholder="Full Name"/>
    <input type="email" placeholder="Email"/>
    <input type="email" placeholder="personemail@example.com" disabled/>
    <textarea name="message" id="" cols="30" rows="10" placeholder="Message"></textarea>
    <input type="submit"/>
</form>
</div>
    )
}