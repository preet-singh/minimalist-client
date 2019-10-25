import React from 'react'
import './MinimalistForm.css'
import PropTypes from 'prop-types';

export default function MinimalistForm(props) {
  const { className, ...otherProps } = props
  return (
    <form
      className={['Minimalist-form', className].join(' ')}
      action='#'
      {...otherProps}
    />
  )
}

MinimalistForm.propTypes = {
  classname: PropTypes.string.isRequired,
  otherProps: PropTypes.object.isRequired
}
