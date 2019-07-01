import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
// import CalendarComponent from './Calendar'
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
                            This will be the content of the calendar is when I finally get it to actually work, but for now I will just fill this with text. Text and tears which slowly rolling down my cheeks as all of the regrets from my life flood back in, why didn't I play fetch with Fido more. Fido was such a good dog, he didn't deserve to go out like that, by not existing and just being a weird example my brain dreamed up to give me more regrets to imagine in my life. I am sitting in a completely dark room right now, listening to spooky stories and attempting to get this Calendar to work. Truly my coding is the spookiest thing of all.
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
