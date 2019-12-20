import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Hyph } from '../../utils/utils'
import TokenService from '../../services/token-service'
import IdleService from '../../services/idle-service'
import LandingPage from '../LandingPage/LandingPage';
import InventoryContextNew from '../../InventoryContextNew';
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

  // render() {
  //   return (
  //     <nav className='Header'>
  //       <h1>
  //         <Link to='/'>
  //           Minimalist
  //         </Link>
  //       </h1>
  //       {TokenService.hasAuthToken()
  //         ? this.renderLogoutLink()
  //         : this.renderLoginLink()}
  //     </nav>
  //   )
  // }
  static contextType = InventoryContextNew;
  render() {
  return(
    <nav className="Header">
      <h1><Link to=''>Minimalist</Link></h1>
         {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      <div className="under-bar"><Link to='/' onClick={(e) => {
        window.localStorage.removeItem('minimalistSeenLanding');
        this.context.setLanding(false);
        }} className="about-link">About</Link>
      </div>
    </nav>
  );
    }
}

export default withRouter(Header)