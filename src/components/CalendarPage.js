import React, { Component } from 'react'
import { Layout, Menu, Calendar } from 'antd'
const { Header, Sider, Content } = Layout

class CalendarPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <Layout>
                        <Header style={{ backgroundColor: 'white' }}>
                            <Menu mode='horizontal' style={{
                                background: "rgba(0, 53, 89, 1)",
                                color: "rgb(161, 233, 29)",
                                border: "3px rgb(130, 184, 31) solid",
                                borderRadius: "25px",
                                textAlign: "center",
                                width: "20%",
                                height: '100%'
                            }}>
                                <Menu.Item>Schedule</Menu.Item>
                                <Menu.Item>Conflicts</Menu.Item>
                            </Menu>
                        </Header>
                    </Layout>
                    <Layout>
                        <Content
                            style={{
                                color: "rgba(0, 53, 89, 1)",
                                backgroundColor: "rgb(74, 162, 197)",
                                padding: "20px",
                                border: "5px rgba(0, 53, 89, 1) solid",
                                borderRadius: "5px",
                                width: "400px",
                                height: '100%',
                                display: "flex",
                                flexDirection: "column",
                                
                            }}>
                            <Calendar></Calendar>
                        </Content>
                        <Sider
                            style={{
                                color: "rgba(0, 53, 89, 1)",
                                backgroundColor: "rgb(74, 162, 197)",
                                padding: "20px",
                                border: "5px rgba(0, 53, 89, 1) solid",
                                borderRadius: "5px",
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                
                            }}>
                            This is where when you click on an event the information will go
                        </Sider>
                    </Layout>
                    <Layout>
                        <Header style={{
                                color: "rgba(0, 53, 89, 1)",
                                backgroundColor: "rgb(74, 162, 197)",
                                padding: "10px",
                                border: "5px rgba(0, 53, 89, 1) solid",
                                borderRadius: "5px",
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                textAlign: 'center'
                                
                            }}>2nd area</Header>
                    </Layout>
                </div>


            </React.Fragment>
        )
    }
}

export default CalendarPage;
