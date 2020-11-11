import React from 'react'
import { Button } from 'reactstrap'

const IconButton = ({ Icon, name, color, outline, className, href, onClick }) => {
    return (
        <div className="button_icon">
            <Button
                color={color}
                outline={outline}
                className={className}
                href={href}
                onClick={onClick}
            >
                <div>{Icon}</div>
                <div className="ml-2">{name}</div>
            </Button>
        </div>
    )
}

export default IconButton
