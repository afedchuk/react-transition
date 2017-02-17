import React, { Component, PropTypes } from 'react';


const renderField = ({ input, label, type, meta: { touched, error, invalid, warning } }) => (
  <div className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
    <div>
      <input {...input} className="form-control"  placeholder={label} type={type}/>
       <div className="help-block error-wrapper">
      {touched && ((error && <p className="error">{error}</p>) || (warning && <p className="error">{warning}</p>))}
      </div>
    </div>
  </div>
)

export default renderField;