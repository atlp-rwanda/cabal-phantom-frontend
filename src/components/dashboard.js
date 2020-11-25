import React, { Component } from 'react'
import '../assets/style/dashboard.scss'

export default class dashboard extends Component {
     
    render() {
            if (localStorage.getItem('user-data') ){
                return (
                    <div className='hiDasboard'>
                        <h1>Welcome { localStorage.getItem('user-data') } </h1>
                    </div>
                )
            }

        return (
            <div className='hiDasboard'>
                <h1>Hi you are not loged in. Login to see your dashboard. </h1>
            </div>
        )
    }
}
