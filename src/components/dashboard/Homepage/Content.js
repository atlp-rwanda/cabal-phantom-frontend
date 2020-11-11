import React, { Component } from 'react'
import { Row, Col, Container, Card, CardTitle } from 'reactstrap';
import PeopleIcon from '@material-ui/icons/People';
import CardTemplate from '../helpers/CardTemplate'
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import DirectionsSubwayIcon from '@material-ui/icons/DirectionsSubway';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

export default class Content extends Component {

    render() {
        return (
            <Container fluid>
                <Row className="d-flex flex-wrap">
                    <CardTemplate Icon={PeopleIcon} Title={'Visitors'} Counter={1000} Type={'People'} />
                    <CardTemplate Icon={AirportShuttleIcon} Title={'Buses'} Counter={200} Type={'Buses'} />
                    <CardTemplate Icon={DirectionsSubwayIcon} Title={'Routes'} Counter={50} Type={'Routes'} />
                    <CardTemplate Icon={AccountBoxIcon} Title={'Users'} Counter={550} Type={'People'} />
                </Row>
                <Row>
                    <Col sm="12" className="mt-4">
                        <Card body className="p-5">
                            <CardTitle tag="h1">Statistics</CardTitle>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" lg="6" className="mt-4">
                        <Card body className="p-5">
                            <CardTitle tag="h1">Most Travelled Routes</CardTitle>
                        </Card>
                    </Col>
                    <Col sm="12" lg="6" className="mt-4">
                        <Card body className="p-5">
                            <CardTitle tag="h1">Most Active Buses</CardTitle>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
