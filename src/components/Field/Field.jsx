import React, { Component } from 'react'

export default class Field extends Component {

  errorPhrases = {
    firstNameEmpty: 'Нужно указать имя',
    firstNameWrong: 'Имя указано не верно',
    lastnameEmpty: 'Нужно указать фамилию',
    lastnameWrong: 'Фамилия указано не верно',
    passwordEmpty: 'Нужно указать пароль',
    passwordWrong: 'Пароль указан не верно'
  }

  render() {
    const { name, type, label, onInputChange } = this.props;
    const inputClassNames = `field__input field-input t-input-${name}`;
    const errmsgClassNames = `field__error field-error t-error-${name}`;
    return (
      <p className="field">
        <label htmlFor={name} className="field__label">
          <span className="field-label">{label}</span>
        </label>
        <input 
          className={inputClassNames}
          name={name}
          id={name}
          type={type}
          onChange={onInputChange}
        />
        <span className={errmsgClassNames}></span>
      </p>
    )
  }
}