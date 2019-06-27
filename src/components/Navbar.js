import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from 'antd'

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <Menu mode='horizontal'>
                    <Link to="/home"><Menu.Item>Home</Menu.Item></Link>
                    <Link to='/profile'><Menu.Item>Profile</Menu.Item></Link>
                    <Link to='/'><Menu.Item>Login Page</Menu.Item></Link>
                    <Link to='/register'><Menu.Item>Registration Page</Menu.Item></Link>
                </Menu>
            </React.Fragment>
        )
    }
}

export default Navbar