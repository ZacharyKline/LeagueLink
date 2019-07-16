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
            className='welcomeBox'>
                         <h1
           className='welcomeText'
           >Welcome to League Link!</h1> 
           <p 
           className='welcomeExplain'
           >League Link is a tool for coaches and parents to connect and plan scheduling for intramural sports games and practices. Some features include:</p>
           <ul className='welcomeExplain'>
             <li>A calendar feature which lets you set conflicts</li>
             <li>Ability conflicts across an entire team</li>
             <li>Setting practice/match schedule utilizing conflict data</li>
             <li>Easy to use user profile</li>
             <li>and more features coming!</li>
           </ul>
           <div className='welcomeExplain'>Thank you for your support!</div>
            </div>
        <LoginForm />
        </Layout>
      </React.Fragment>
    )
  }
}