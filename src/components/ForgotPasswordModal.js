import React, { Component } from 'react'
import { Modal, Button, Form, Input } from "antd"

export default class ForgotPasswordModal extends Component {
  handleChange = e => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value });
  }

  submitForm = e =>{
    e.preventDefault()
    this.props.ForgotPassword(this.state);
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.props.close()
    }, 3000);
  };



  render() {
    return (      
      <div>
        <Modal
          title="Title"
          visible={this.props.visible}
          onOk={this.handleOk}
          onCancel={this.props.close}
          footer={[
            <Button key="cancel" onClick={this.props.close}>
              cancel
            </Button>,
            <Button key="submit" type="primary" loading={this.props.loading} onClick={this.submitForm}>
              Email Me
            </Button>,
          ]}>
            <Form >
            <h1>Forgot Password</h1>
            <label htmlFor="email">Email</label>
            <Form.Item>

              <Input
                className="stylee"
                type="text"
                name="email"
                autoFocus
                required
                onChange={this.handleChange}
              />
            </Form.Item>
            </Form>
        </Modal>
      </div>
    )
  }
}