import React from 'react'
import { Card, CardTitle, CardText, Col } from 'reactstrap';
const CardTemplate = ({ Icon, Title, Counter, Type }) => {

    const cardTextStyles = {
        fontSize: "1.5rem",
        color: "#dc3545"
    }

    return (
        <Col sm="6" lg="3" className="mt-4">
            <Card body>
                <div className="d-flex align-items-start">
                    <div className="icon"><Icon style={{ fontSize: "3rem" }} /></div>
                    <div className="ml-4">
                        <CardTitle tag="h2" className="font-weight-bold">{Title}</CardTitle>
                        <CardText style={cardTextStyles}>
                            <span>{Counter}</span>
                            <span className="ml-5">{Type}</span>
                        </CardText>
                    </div>
                </div>
            </Card>
        </Col>
    )
}

export default CardTemplate
