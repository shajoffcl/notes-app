import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div id='header'>
        <div className='nav-container'>
          <div className='nav-item' onClick={() => this.props.history.push('/')}>Create note</div>
          <div className='nav-item' onClick={() => this.props.history.push('/viewnotes')}>View notes</div>
        </div>
      </div>
    )
  }
}

export default Header
