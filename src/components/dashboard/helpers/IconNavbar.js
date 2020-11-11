import React from 'react'

export const IconNavbar = ({ Icon, title }) => {
    return (
        <div className="tab-link p-2">
            <div><Icon style={{ fontSize: "3rem" }} /></div>
            <div className="ml-3">{title}</div>
        </div>
    )
}

export default IconNavbar
