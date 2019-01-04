import React, { Component } from 'react'

export default class Field extends Component {
  render() {
    return (
      <p className="field">
        <label htmlFor="lastName" className="field__label">
          <span className="field-label">Фамилия</span>
        </label>
        <input 
          className="field__input field-input t-input-lastname" 
          name="lastName" 
          type="text"
          // onChange={this.onInputChange}
        />
        <span className="field__error field-error t-error-lastname">lsdjfjsd</span>
      </p>
    )
  }
}