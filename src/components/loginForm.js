import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginAction } from '../redux/actions/loginAction';
import { withRouter } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close';
import { Progress } from 'reactstrap';
import '../assets/styles/login.scss'


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
      emailErrorStatus: false,
      passwordErrorStatus: false,
    };
  }

  validate = () => {
    let isError = false;
    const errors = {
      emailError: '',
      passwordError: '',
      emailErrorStatus: false,
      passwordErrorStatus: false,
    };

    if (this.state.email.indexOf('@') === -1) {
      isError = true;
      errors.emailErrorStatus = true;
      errors.emailError = 'Provide a valid email';
    }
    if (this.state.password.length == 0) {
      isError = true;
      errors.passwordErrorStatus = true;
      errors.passwordError = 'Provide a password';
    }
    this.setState({
      ...this.state,
      ...errors,
    });
    return isError;
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const error = this.validate();
    if (!error) {
      const send = {
        email: this.state.email,
        password: this.state.password
      }
      await this.props.loginAction(send, this.props.history);
    }
  };

  change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='loginPage'>
        <div className='div2'>
          <form id="form" onSubmit={(e) => this.onSubmit(e)}>

            <span style={{ display: this.props.loginState.loading }}>
              <Progress multi>
                <Progress animated bar color="primary" value="33" />
                <Progress animated bar color="success" value="34" />
                <Progress animated bar color="warning" value="33" />
              </Progress>
            </span>
            
            <div className="d-flex justify-content-between align-items-center mb-5">
              <h1 className="login-title">Login</h1>
              <Link to='/'>
                <CloseIcon
                  style={{
                    fontSize: '3rem',
                    cursor: 'pointer',
                    color: 'black',
                  }} />
              </Link>
            </div>

            <span style={{ color: "red" }}>{this.props.loginState.error}</span>

            <div className="d-flex flex-column mb-4">
              <label id="email" htmlFor="" >Email</label>
              <span style={{ color: "red" }}>{this.state.emailError}</span>
              <input
                id="aria-1"
                aria-label="email"
                type="email"
                name="email"
                placeholder="email"
                onChange={(e) => this.change(e)}
                className="inputLogin"
              />
            </div>

            <div className="d-flex flex-column mb-4">
              <label id="password" htmlFor="" >Password</label>
              <span style={{ color: "red" }}>{this.state.passwordError}</span>
              <input
                id="aria-2"
                aria-label="password"
                type="password"
                name="password"
                placeholder="password"
                onChange={(e) => this.change(e)}
                className="inputLogin"
              />
              <Link to='/reset-password' className="resetPassword mb4">
                Forgot Password
            </Link>
            </div>

            <button className="loginButton" type="submit" value="LOGIN" aria-label="login" >
              Login
            </button>

          </form>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    loginState: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (data, history) => dispatch(loginAction(data, history))
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginForm)
);
