import React, { useState } from 'react';
import { Container, TabContent, TabPane, Navbar, NavLink, Row, Col, Button } from 'reactstrap';
import classnames from 'classnames'
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import DirectionsSubwayIcon from '@material-ui/icons/DirectionsSubway';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import IconNavbar from './helpers/IconNavbar'
import Content from './Homepage/Content'
import TopBar from './Homepage/TopBar'
import Users from './users/DisplayUsers'
import LogoutAdmin from "../../components/Logout"
import Error from '../errors/ErrorTemplate'
import '../../assets/styles/dashboard.scss'

const Dashboard = (props) => {
    const token = localStorage.getItem("token");

    if (token) {
        const name = JSON.parse(localStorage.getItem('user-data'));
        const getName = name.name
        const role = JSON.parse(localStorage.getItem('user-data'));
        const getRole = role.role

        if (token && getRole === "admin") {
            const [activeTab, setActiveTab] = useState('1');

            const toggle = (tab) => {
                if (activeTab !== tab) {
                    setActiveTab(tab)
                }
            }

            return (
                <Container fluid>
                    <Row>
                        <Col className="hei-100 leftside p-0" sm={3} lg={2}>
                            <div className="sidebar">
                                <h1 className="logo text-center font-weight-bold m-3">Phantom</h1>
                                <div className="d-flex flex-column align-items-center justify-content-between">
                                    <div className="sidebar__profile">
                                        <AccountCircleIcon style={{ fontSize: "4rem" }} />
                                        <h3>ADMIN</h3>
                                    </div>

                                    <Navbar className="vertical-nav p-0">
                                        <NavLink
                                            className={classnames({ active: activeTab === '2' })}
                                            onClick={() => { toggle('2') }}
                                        >
                                            <IconNavbar Icon={AccountBoxIcon} title="Users" />
                                        </NavLink>

                                        <NavLink
                                            className={classnames({ active: activeTab === '3' })}
                                            onClick={() => { toggle('3') }}
                                        >
                                            <IconNavbar Icon={AirportShuttleIcon} title="Buses" />
                                        </NavLink>

                                        <NavLink
                                            className={classnames({ active: activeTab === '4' })}
                                            onClick={() => { toggle('4') }}
                                        >
                                            <IconNavbar Icon={DirectionsSubwayIcon} title="Routes" />
                                        </NavLink>
                                    </Navbar>
                                    <LogoutAdmin />
                                </div>
                            </div>
                        </Col>

                        <Col sm={9} lg={10} className="hei-100 rightside p-0">
                            <TopBar />
                            <TabContent activeTab={activeTab} className="p-2">
                                <TabPane tabId="1">
                                    <Content />
                                </TabPane>

                                <TabPane tabId="2">
                                    <Users />
                                </TabPane>

                                <TabPane tabId="3">
                                    <h1>Buses</h1>
                                </TabPane>

                                <TabPane tabId="4">
                                    <h1>Routes</h1>
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                </Container>
            );
        } else {
            <div>
                <Error
                    name={getName}
                    title="Unauthorized ⚠"
                    content="You are not authorized to access here! Please reach out to system administrator for help."
                />
            </div>
        }
    } else {

        return (
            <div>
                <Error
                    title="Unauthorized ⚠"
                    content="You are not authorized to access here! Please reach out to system administrator for help."
                />
            </div>
        )
    }
}

export default Dashboard;
