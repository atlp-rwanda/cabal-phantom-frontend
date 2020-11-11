import React, { Component } from 'react';

export default class Navigation extends Component {
    render() {
        return (
            <div className="headers">
                <div className="headers__logo">Phantom</div>
                <div className="headers__menu">
                    <select name="Languages" className="headers__menu__select">
                        <option value="English">English</option>
                        <option value="French" >French</option>
                        <option value="Kinyarwanda" >Kinyarwanda</option>
                    </select>
                </div>
            </div>
        )
    }
}
