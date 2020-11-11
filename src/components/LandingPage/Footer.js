import React, { Component } from 'react'
import './../../assets/styles/Footer.scss'

export default class Footer extends Component {
    state = {
        curTime: new Date().getFullYear(),
    }
    render() {
        return (
            <div className="footer">
                <div className="footer__header">
                    <div className="footer__about">
                        <h2>About Us</h2>
                        <p>Phantom is website application that help to track public buses</p>
                    </div>
                    <div className="footer__contact">
                        <h2>Our Contact</h2>
                        <h5 className="fa fa-envelope" ><a href="mailto:phantomcabal2@gmail.com">hello@phantom.com</a></h5>
                        <h5 className="fa fa-phone"><a href="tel:0788732123" >+250788732123</a></h5>
                        <h5 className='fa fa-map-marker'><a href="">KK 107 Ave</a></h5>
                    </div>
                    <div className="footer__social">
                        <h2>Our Social Media</h2>
                        <span><a href=""><i className="fa fa-facebook"></i></a></span>
                        <span><a href=""><i className="fa fa-twitter"></i></a></span>
                        <span><a href=""><i className="fa fa-instagram"></i></a></span>
                        <span><a href=""><i className="fa fa-linkedin"></i></a></span>
                    </div>
                </div>
                <div className="footer__footer">
                    <p>Copyright &copy; {this.state.curTime} Phantom. All rights reserved</p>
                </div>
            </div>
        )

    }
}

