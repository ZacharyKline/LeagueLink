import React, { Component } from 'react';
import { connect } from "react-redux";
import { logoutThenGoToHomepage } from "../actions";

class Logout extends Component {
    render() {
        return (
        <React.Fragment>
        <button  style={{ border: "0", background: "linear-gradient(rgb(8, 77, 121),rgba(0, 53, 89, 1))", color: "rgb(161, 233, 29)"}} className='logout' onClick={this.props.logout} >logout</button>
        </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        path: state.router.location.pathname
    };
};

const mapDispatchToProps = {
    logout: logoutThenGoToHomepage
};


export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(Logout);
