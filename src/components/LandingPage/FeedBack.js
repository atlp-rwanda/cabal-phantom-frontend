import React from 'react';
import './../../assets/styles/FeedBack.scss'

export default function FeedBack() {
    return (
        <div className="feedback" id="feedback">
            <h1>Provide us a Feedback</h1>
                <form action="" className="feedback__inputs">
                <input type="text" placeholder="Your name" id="name" />
                <input type="email" placeholder="Your email" id= "email" />
                <br/>
                <textarea name="feedback" id="" cols="40" rows="7" placeholder="Your feedback" />
                <button value="submit">Submit</button>
                </form>
        </div>
    )
}
