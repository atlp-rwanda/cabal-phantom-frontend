import React, { Component } from 'react'
import { BrowserRouter as Router, Link as Links } from "react-router-dom";
import { animateScroll as scroll, Link } from 'react-scroll'
import './../../assets/styles/Navigation.scss'

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'english',
            isActive: false,
            className: "menu-icon",
            hide: "hide"
        };
    }
    componentDidMount() {

        const scroller = () => {

            var nav1 = document.getElementById("nav_black");

            if (window.scrollY > 0) {
                nav1.classList.add("black");
            }
            else {
                nav1.classList.remove("black");
        }
        }
        window.addEventListener('scroll', scroller)
    }
    hiden = () => {
        if (this.state.hide === "hide") {
            this.setState({ hide: "showing" });
        }
        else {
            this.setState({ hide: "hide" });
        }
    }
    render() {
        return (
            <div id="wrapper" className="wrapper">
                <nav id="nav_black" className={this.state.isActive ? "black" : null}>
                    <div className="responsive-nav">
                        <div>
                            <Links to="/" >
                                <div className="logo" onClick={() => scroll.scrollToTop()}>
                                    Phantom
                                </div>
                            </Links>
                        </div>

                        <div className={this.state.className} id="icon" onClick={this.hiden}>
                            <i className="fa fa-bars fa-4x"></i>
                        </div>
                        
                    </div>
                    <div className="menu">
                        <ul id="nav_ul" className={this.state.hide}>
                            <li>
                                <Link
                                    className="header__menu__item"
                                    to="About"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={1000}>About Us
                                    </Link>
                            </li>
                            <li>
                                <Link
                                    className="header__menu__item"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={1000}
                                    to="feedback">Contact Us
                                    </Link>
                            </li>
                            <li className="login_menu">
                                <Links
                                    className="header__menu__item"
                                    to="/login"
                                    duration={1000}
                                >Login
                                </Links>
                            </li>
                            <li>
                                <select name="Languages" className="header__menu__select" value={this.setState.language}>
                                    <option value>English</option>
                                    <option value>French</option>
                                    <option value>Kinyarwanda</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

