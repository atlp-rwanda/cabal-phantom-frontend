import React, { Component } from 'react';
import { connect } from "react-redux"
import { logout } from '../redux/actions/logoutAction'
import { withRouter } from 'react-router-dom'
import "../assets/style/dashboard.scss"


 class Logout extends Component {
    render() {
        if(localStorage.getItem("token")){
             return (
            <div>
                <button className="logout" onClick={()=>this.props.logout(this.props.history)}>LOGOUT</button>
            </div>
        )
        }
        return (
            <div>
                <h1>Dear phantom user please login first!</h1>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      logoutState: state.logout,
    };
  };
const mapDispatchToProps = (dispatch) => {
  return {
    logout: (history) => dispatch(logout(history))
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Logout)
);
  