import React, { Component } from 'react'
import { LoginForm } from "."
import { Layout } from 'antd'


export default class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout
          style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundSize: 'cover',
          marginBottom: 0
          }}
        >
        <div
          className='welcomeBox'
          >
           <h1>Welcome to League Link!</h1> 
          </div>
        <LoginForm />
        </Layout>
      </React.Fragment>
    )
  }
}