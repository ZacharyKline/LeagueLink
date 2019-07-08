import React, { Component } from 'react'
import { Navbar } from "."
import { Row, Col,Card, Button, Calendar, Avatar,Popconfirm, message  } from 'antd'
import { connect } from "react-redux";
import { deleteUserThenGoToLoginPage as handleDeleteUser } from "../actions";


const text = 'Are you sure to delete this Account?';

function confirm() {
  message.info('Clicked on Yes.');
}



export class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <br />
        <br />
        <br />
       <div>
       <Row>
      <Col span={14} offset={6}> <Card>
         Teams
         <br />
            Team Name- Coaches Info
        </Card></Col>
        </Row>
        <br />
        <Row>
      <Col span={8} offset={4}>
       <Card>
       <Avatar shape="square" size={64} icon="user" />
       <br />
         Name
         <br />
         Contact Info
         <br /> 
         Team Affiliation
         </Card> 
      </Col>
    </Row>
    <Row>
      <Col span={8} offset={4}>
      <Button type="dashed" block>
        Edit User
    </Button>
    <Col />
    <Popconfirm placement="top" title={text} onClick={this.props.handleDeleteUser} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button span={8} offset={4} type="dashed ">Delete Acount</Button>
      </Popconfirm>
      </Col>
      <br />
      
      <Col span={8} offset={2}>
        <Card>
           <Calendar /> 
        </Card>
      </Col>
    </Row>
    <Row>
      <Col span={12} offset={6}>
        Something Righteous 
      </Col>
    </Row>
       </div>
       </React.Fragment>
    )
  }
}

function mapStateToProps({ auth}) {
  return {
    // id: auth.login.id,
  };
}

const mapDispatchToProps = {
  handleDeleteUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

