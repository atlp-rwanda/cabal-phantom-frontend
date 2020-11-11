import React, { Component } from 'react'
import { connect } from "react-redux"
import { Alert, Spinner, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import '../../../assets/styles/dashboard.scss'
import { registerUserAction } from '../../../redux/actions/registerUserAction'
import { Progress } from "reactstrap"

class AddNewUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            birthdate: '',
            gender: ''
        };
    }
    registerUserAction
    onSubmit = async (e) => {
        e.preventDefault();
        console.log('form targeted...')
        const data = {
            name: this.state.name,
            email: this.state.email,
            birthdate: this.state.birthdate,
            gender: this.state.gender
        }
        await this.props.registerUserAction(data)
    };

    change = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div>
                <Modal isOpen={this.props.isOpen} centered>
                    <ModalHeader style={{ fontSize: '3rem', fontWeight: 'bold' }} className="text-primary">Add New User</ModalHeader>

                    <div style={{ color: "green", display: this.props.registerState.loading }}>
                    <Progress multi>
                        <Progress animated bar color="primary" value="33" />
                        <Progress animated bar color="success" value="34" />
                        <Progress animated bar color="warning" value="33" />
                    </Progress>
                    </div>

                    <ModalBody>
                        <Form onSubmit={(e) => this.onSubmit(e)}>
                            {
                                this.props.registerState.error ?
                                    <Alert color="warning" style={{ fontSize: '1.3rem'}}>
                                        {this.props.registerState.error}
                                    </Alert> : <span></span>
                            }
                            {
                                this.props.registerState.data.statusText=== "Created" ?
                                    <Alert color="success" style={{ fontSize: '1.3rem'}}>
                                         {"User succesfully registered !"}
                                    </Alert>: <span></span>
                            }

                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    onChange={(e) => this.change(e)} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="E-mail"
                                    onChange={(e) => this.change(e)} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleDate">Birthdate</Label>
                                <Input
                                    type="date"
                                    name="birthdate"
                                    id="birthdate"
                                    placeholder="date"
                                    onChange={(e) => this.change(e)} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleSelect">Gender</Label>
                                <Input
                                    type="select"
                                    name="gender"
                                    id="gender"
                                    onChange={(e) => this.change(e)}>
                                    <option>Select gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </Input>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" style={{ fontSize: '1.5rem', padding: '.6rem 1.3rem' }} onClick={(e) => this.onSubmit(e)}>Save</Button>
                        <Button color="warning" style={{ fontSize: '1.5rem', padding: '.6rem 1.3rem' }} onClick={this.props.onClick}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        registerState: state.registerUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerUserAction: (data) => dispatch(registerUserAction(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddNewUser);
