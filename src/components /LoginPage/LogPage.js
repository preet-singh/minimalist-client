import React, { Component } from 'react';
import LoginPage from './LoginPage';
//import './Login.css';
import { Section } from '../../utils/utils';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';


export default class LogPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <Section className='login-page'>
        <Link to="/">
          <FontAwesomeIcon icon={faAngleDoubleLeft} className="back-chev-plans"></FontAwesomeIcon>
        </Link>

        <h2>Login To Your Account!</h2>
        <LoginPage
          onLoginSuccess={this.handleLoginSuccess}
        />
      </Section>
    )
  }
};