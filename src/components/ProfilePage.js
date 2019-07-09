
/*
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
*/


//////////  Brett work 

import React, { Component } from 'react'
import { Navbar } from "."
import { Row, Col,Card, Button, Calendar, Avatar,Popconfirm, message  } from 'antd'


const text = 'Are you sure to delete this Account?';

function confirm() {
  message.info('Clicked on Yes.');
}

function onPanelChange(value, mode) {
  console.log(value, mode);
}


/*
import { Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

ReactDOM.render(
  <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
  </div>,
  mountNode,
);
*/


export default class Profile extends Component {
  render() {
    return (
      <React.Fragment >
        <section  style={{ /* backgroundColor: "lightblue", alignItems:"center", margin:"auto", border: "1px rgba(0, 53, 89, 1) solid"  */ }}>
          <Navbar/>

          <div style={{  backgroundColor: "lightblue", width:"1000px" , margin:"auto", alignContent:"center", border: "5px darkblue solid", borderRadius: "25px" }} >     
          <div style={{ width:"800px" , margin:"auto", alignContent:"center", border: "0", marginTop:"50px" ,  }} >
            
    <div style={{ marginBottom:"175px"  /*,marginTop:"50px" , */}}>
                <Col  > 
                    <Card  style={{ border: "2px rgba(0, 53, 89, 1) solid",
              borderRadius: "25px" }}>
                      Teams
                    <br />
                      Team Name- Coaches Info
                    </Card>
                
                    <Card  style={{ border: "2px rgba(0, 53, 89, 1) solid",
              borderRadius: "25px" }} >
                      <Avatar shape="square" size={64} icon="user" />
                      <br />
                      Name
                      <br />
                      Contact Info
                      <br /> 
                      Team Affiliation
                    </Card> 
            
                      <Button type="dashed" style={{ border: "2px rgba(0, 53, 89, 1) solid",
              borderRadius: "25px" }} >
                        Edit User
                      </Button>
                  
                  <Popconfirm placement="top" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                    <Button span={8} offset={4} type="dashed " style={{ border: "2px rgba(0, 53, 89, 1) solid",
              borderRadius: "25px" }}>Delete Account</Button>
                  </Popconfirm>
                  
                  <Card style={{ border: "2px rgba(0, 53, 89, 1) solid",
                                                      borderRadius: "25px", marginBottom:"0px"  }}  >
                                      <div  /*   The Calender   */ style={{ width: "100%", border: '1px solid #d9d9d9', borderRadius: 4 }}>
                                          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                                      </div>

                                </Card>


                  </Col>

            </div>
                              <Col span={8} offset={2}>
                              </Col>
            
            <Row>
              <Col span={12} offset={6}>
                Something Righteous 
              </Col>
            </Row>
          </div >
          </div>
        </section>
      </React.Fragment>
    )
  }
}
/*
/////////////////////// incoming change
const mapDispatchToProps = {
  handleDeleteUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
*/
