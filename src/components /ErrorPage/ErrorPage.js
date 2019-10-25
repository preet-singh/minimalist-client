import React, { Component } from 'react';
import { Section } from '../../utils/utils';
import PropTypes from 'prop-types';

export default class ErrorPage extends Component {
  state = {
    error: null
  };

  // Static method
  static getDerivedStateFromError(error) {
      return {error};
  }
  render() {
      if (this.state.error) {
          return (
              <Section className="error-page">
                  <h1>Something seems to have gone wrong</h1>
                  <p>Try refreshing the page</p>
              </Section>
          );
      }
      return this.props.children;
  }
}

ErrorPage.propTypes = {
    children: PropTypes.object.isRequired
  }

//   export default class ErrorPage extends Component {
//     render() {
//       return (
//         <Section className='NotFoundPage'>
//           <h2>404 - Page not found</h2>
//           <p>Try going back to your previous page.</p>
//         </Section>
//       )
//     }
//   }