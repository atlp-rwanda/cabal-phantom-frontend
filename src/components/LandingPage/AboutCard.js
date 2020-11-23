import React from 'react'
import './../../assets/styles/About.scss'

export default function AboutCard({ image, title, description }) {
    return (
        <div className="about__card__template">
            <img src={image} alt=""/>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}
