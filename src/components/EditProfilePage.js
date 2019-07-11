import React, { Component } from 'react'
import { editProfile } from "../actions";
import { connect } from "react-redux";
import { Button, Form, Input, Layout } from "antd";


class EditProfile extends Component {
    //-----------  Might need this if we have to set a current user info, depending on how Elizabeth did it?
    // componentDidMount() {  
    //     this.props.setCurrentInfo(this.props.id);
    // } 

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleEditProfile = event => {
        event.preventDefault();
        let inputObj = {
            name: this.state.name,
            contactPhone: this.state.contactPhone,
            teamAffiliation: this.state.teamAffiliation
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
                            ></Input>
                        </Form.Item>
                        <Form.Item>
                            <Input
                                type='phone'
                                addonBefore="Contact Phone"
                                required
                                
                            ></Input>
                        </Form.Item>
                        <Form.Item>
                            <Input
                                type='text'
                                addonBefore='Team Affiliation'

                            ></Input>
                        </Form.Item>
                        <Form.Item>
                            <Button
                                style={{
                                    background:
                                        "linear-gradient(rgb(8, 77, 121),rgba(0, 53, 89, 1))",
                                    color: "rgb(161, 233, 29)",
                                    border: "2px rgb(130, 184, 31) solid",
                                    borderRadius: "25px",
                                    fontSize: "large",
                                    minWidth: "120px"
                                }}
                                type="submit"
                                value="submit"
                                onClick={this.handleEditProfile}>Submit</Button>
                        </Form.Item>
                    </Form>
                </Layout>
            </React.Fragment>
        )
    }
}

function mapStateToProps({ users, editProfile }) {
    return {
        //   userId: user.login.userId,
          name: users.name,
          contactPhone: users.contactPhone,
          teamAffiliation: users.teamAffiliation

    };
}

const mapDispatchToProps = {
    editProfile
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProfile);
