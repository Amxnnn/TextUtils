/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}</strong>:{props.alert.msg}
        
    </div>
  )
}

export default Alert
Alert.protoTypes = {
    title:PropTypes.string,
    aboutText:PropTypes.string,
  }