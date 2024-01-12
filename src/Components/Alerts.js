import React from 'react'
import PropTypes from 'prop-types'

function Alerts(props) {
    const Capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }


  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
   <strong>{props.alert.type}</strong>: {props.alert.msg}
</div>
  )
}
export default Alerts

