import React, { Component } from 'react'
import { editProfile } from "../actions";
import { connect } from "react-redux";
import {
    Button, 
    Form,
    Input,
    Layout,
        } from "antd";
import { Link } from 'react-router-dom'
import { getUserById } from "../actions";


class EditProfile extends Component {
    componentDidMount() {
        this.props.getUserById(this.props.login.id);
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleEditProfile = event => {
        event.preventDefault();
        let inputObj = {
            fullName: this.state.fullName,
            phone: this.state.phone,
        };
        this.props.editProfile(inputObj);
    };

    render() {
        return (
            <React.Fragment>
                <Layout>
                    <Form
                        style={{
                            color: "rgba(0, 53, 89, 1)",
                            backgroundColor: "rgb(74, 162, 197)",
                            padding: "20px",
                            border: "5px rgba(0, 53, 89, 1) solid",
                            borderRadius: "5px",
                            width: "400px",
                            display: "flex",
                            flexDirection: "column",
                            margin: "40px auto"
                        }}>
                        <Link to='/profile'>
                        <Button 
                        style={{
                            background: "rgba(0, 53, 89, 1)",
                            color: "rgb(161, 233, 29)",
                            border: "3px rgb(130, 184, 31) solid",
                            borderRadius: "25px",
                            textAlign: "center",
                        }}>Go Back</Button>
                        </Link>
                        <br />
                        <h1
                            style={{
                                background: "rgba(0, 53, 89, 1)",
                                color: "rgb(161, 233, 29)",
                                border: "3px rgb(130, 184, 31) solid",
                                borderRadius: "25px",
                                textAlign: "center",
                                width: "100%"
                            }}>Edit Profile</h1>
                        <Form.Item>
                            <Input
                                type='text'
                                className="stylee"
                                addonBefore="Name"
                                autoFocus
                                required
                                placeholder={this.props.fullName}
                            ></Input>
                        </Form.Item>
                        <Form.Item>
                            <Input
                                type='phone'
                                addonBefore="Contact Phone"
                                required
                                placeholder={this.props.phone}

                            ></Input>
                        </Form.Item>
                        <Form.Item>
                            <Button
                                style={{
                                    background: "linear-gradient(rgb(8, 77, 121),rgba(0, 53, 89, 1))",
                                    color: "rgb(161, 233, 29)",
                                    border: "2px rgb(130, 184, 31) solid",
                                    borderRadius: "25px",
                                    fontSize: "large",
                                    minWidth: "120px"
                                }}
                                type="submit"
                                value="submit"
                                // onClick={this.handleEditProfile}
                                >Submit</Button>
                        </Form.Item>
                    </Form>
                </Layout>
            </React.Fragment>
        )
    }
}

function mapStateToProps({ users, auth }) {
    return {
        login: auth.login,
        fullName: users.user.fullName,
        phone: users.user.phone,

    };
}

const mapDispatchToProps = {
    editProfile,
    getUserById
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProfile);
