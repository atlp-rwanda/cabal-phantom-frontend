import React from 'react'
import IconButton from './IconButton'

const ContentHeader = ({ title, Icon, name, onClick }) => {
    const header_style = {
        padding: '1rem 0',
        borderBottom: '2px solid #fff',
        fontWeight: 'bolder'
    }

    const icon_style = {
        fontSize: '2rem'
    }
    return (
        <div className="d-flex justify-content-between align-items-center" style={header_style}>
            <h2 className="text-primary">{title}</h2>
            <IconButton outline
                Icon={<Icon style={icon_style} />}
                name={name}
                onClick={onClick}
                color="primary"
                className="d-flex align-items-center"
            />
        </div>
    )
}

export default ContentHeader
