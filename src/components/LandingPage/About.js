import React from 'react';
import AboutCard from './AboutCard'
import person from '../../assets/images/person.png';
import notes from '../../assets/images/notes.png';
import './../../assets/styles/About.scss'

function About() {
    return(
        <div className="about" id="About">
            <h1 className="about__title">About Us</h1>
            <div className="about__card">
                <AboutCard
                    image={notes}
                    title="What is Phantom"
                    description="Phantom is website that provide you easier way to find public bus in Rwanda"
                />
               <AboutCard
                    image={person}
                    title="Why Phantom"
                    description="Phantom help you to reduce wasting time while you are waiting public transport."
                />
            </div>
      </div>
    )
}

export default About
