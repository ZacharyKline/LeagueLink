import React, { Component } from 'react'

export default class UserProfile extends Component {
  render() {
    return (
      <div>
        <p>hello registration</p>
      </div>
    )
  }
}



/*
//////////  Brett work 

import React, { Component } from 'react'
import { Navbar } from "."
import { Row, Col,Card, Button, Calendar, Avatar,Popconfirm, message  } from 'antd'


const text = 'Are you sure to delete this Account?';

function confirm() {
  message.info('Clicked on Yes.');
}



export default class Profile extends Component {
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
    <Popconfirm placement="top" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button span={8} offset={4} type="dashed ">Delete Account</Button>
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
*/