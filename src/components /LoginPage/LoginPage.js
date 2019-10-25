import React, { Component } from 'react';
import { Button, Input } from '../../utils/utils';
import AuthApiService from '../../services/auth-api-service';
import { Section } from '../../utils/utils'
import './LoginPage.css';

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
    location: {},
    history: {
      push: () => {},
    },
  }

  state = { error: null }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { user_name, password } = ev.target

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    const { error } = this.state
    return (
      <Section className="LoginPage">
        <form
          className='LoginForm'
          onLoginSuccess={this.handleLoginSuccess}
          onSubmit={this.handleSubmitJwtAuth}
        >
          <div role='alert'>
            {error && <p className='red'>{error}</p>}
          </div>
          <div className='user_name'>
            <label htmlFor='LoginForm_user_name'>
              User name
            </label>
            <Input
              required
              name='user_name'
              id='LoginForm_user_name'>
            </Input>
          </div>
            <div className='password'>
            <label htmlFor='LoginForm_password'>
              
            </label>
            <Input
              required
              name='password'
              type='password'
              id='LoginForm_password'>
            </Input>
          </div>
          <Button className="button" type='submit'>
            Login
          </Button>
        </form>
      </Section>
    )
  }
}