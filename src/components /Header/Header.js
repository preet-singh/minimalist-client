import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Hyph } from '../../utils/utils'
import TokenService from '../../services/token-service'
import IdleService from '../../services/idle-service'
//import './Header.css'

class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link
          to='/register'>
          Register
        </Link>
        <Hyph />
        <Link
          to='/login'>
          Log in
        </Link>
      </div>
    )
  }

  render() {
    return (
      <nav className='Header'>
        <h1>
          <Link to='/'>
            Minimalist
          </Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    )
  }
}

export default withRouter(Header)