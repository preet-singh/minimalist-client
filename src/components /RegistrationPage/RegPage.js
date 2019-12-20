import React, { Component } from 'react';
import { Section } from '../../utils/utils';
import RegistrationPage from './RegistrationPage';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import './Registration.css';
import { Link } from 'react-router-dom';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

export default class RegPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegisterSuccess = user => {
    this.props.history.push('/login')
  }

  render() {
    return (
      <Section className='registration-page'>
        <Link to="/">
          <FontAwesomeIcon icon={faAngleDoubleLeft} className="back-chev-plans"></FontAwesomeIcon>
        </Link>

        <h2>Register for Minimalist</h2>
        <RegistrationPage
          onRegisterSuccess={this.handleRegisterSuccess}
        />
      </Section>
    )
  }
}