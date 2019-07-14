import React, { Component } from 'react';
import { Row, Col, Layout } from 'antd';
import { Navbar } from '.';

const divStyle = {
    color: "rgba(0, 53, 89, 1)",
    backgroundColor: "rgb(74, 162, 197)",
    border: "2px rgba(0, 53, 89, 1) solid",

}

const boxStyle = {
    border: "2px rgba(0, 53, 89, 1) solid",
    height: 50,
    padding: '20px',
    borderRadius: "2px",
    display: "flex",
    flexDirection: "column",
}
class Conflicts extends Component {


    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Layout style={divStyle}>
                    <Row type="flex" justify="start" >
                        <Col span={3} style={boxStyle}>Date</Col>
                        <Col span={3} style={boxStyle}>8am - 10am</Col>
                        <Col span={3} style={boxStyle}>10am - 12pm</Col>
                        <Col span={3} style={boxStyle}>12pm - 2pm</Col>
                        <Col span={3} style={boxStyle}>2pm - 4pm</Col>
                        <Col span={3} style={boxStyle}>4pm - 6pm</Col>
                        <Col span={3} style={boxStyle}>6pm - 8pm</Col>
                        <Col span={3} style={boxStyle}>8pm - 10pm</Col>
                    </Row>
                    <Row type="flex" justify="start">
                        <Col span={3} style={boxStyle}>Team</Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}> ~~ </Col>
                        <Col span={3} style={boxStyle}> X </Col>
                        <Col span={3} style={boxStyle}> ~~ </Col>

                    </Row>
                    <Row type="flex" justify="start">
                        <Col span={3} style={boxStyle}>Breakdown</Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>

                    </Row>
                    <Row type="flex" justify="start">
                        <Col span={3} style={boxStyle}>Coach</Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>

                    </Row>
                    <Row type="flex" justify="start">
                        <Col span={3} style={boxStyle}>Parent</Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>

                    </Row>
                    <Row type="flex" justify="start">
                        <Col span={3} style={boxStyle}>Parent</Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>

                    </Row>
                    <Row type="flex" justify="start">
                        <Col span={3} style={boxStyle}>Parent</Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>

                    </Row>
                    <Row type="flex" justify="start">
                        <Col span={3} style={boxStyle}>Parent</Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>
                        <Col span={3} style={boxStyle}></Col>

                    </Row>
                </Layout>
            </React.Fragment>
        )
    }
}
export default Conflicts