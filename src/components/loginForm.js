import React, { Component } from 'react';
import { connect } from "react-redux";
import { loginAction } from '../redux/actions/loginAction';
import { withRouter } from 'react-router-dom'
import '../assets/style/login.scss'

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
            <div className ='div2'>
              <a href="https://cabal-frontend-staging.herokuapp.com"><div><img className="cancel" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Multiplication_Sign.svg/1024px-Multiplication_Sign.svg.png"/></div></a><br/><br/>
                <p style={{color: "green", display: this.props.loginState.loading}}>Loading..., please wait!</p> <br/> <br/>
                <form id="form" onSubmit={(e) => this.onSubmit(e)}>
                    <h1>Login</h1>
                    <span style={{color: "red"}}>{ this.props.loginState.error}</span>
                    <br/> <br/>
                    <label id="email" htmlFor="" >Email</label><br/>
                    <span style={{color: "red"}}>{ this.state.emailError}</span>             
                     <input
                        id="aria-1" 
                        aria-label="email"
                        type="email"
                        name="email"
                        placeholder="email"
                        onChange={(e) => this.change(e)}
                    />
                    <br/> <br/><br/>
                    <label id="password" htmlFor="" >Password</label><br/>
                    <span style={{color: "red"}}>{ this.state.passwordError}</span>
                      <input
                        id="aria-2" 
                        aria-label="password"
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={(e) => this.change(e)}
                    />
                    <a href="https://cabal-frontend-staging.herokuapp.com/resetPassword"><div><label  style={{color: "Blue"}}>Forgot password?</label></div></a> 
                    <button type="submit" value="LOGIN" aria-label="login" ><h2>Login</h2></button><br/> <br/>
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
