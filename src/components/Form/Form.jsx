import React, { Component } from 'react'
import './Form.css'
import bond from './assets/bond_approve.jpg';

export default class Form extends Component {
  
  errorPhrases = {
    firstNameEmpty: 'Нужно указать имя',
    firstNameWrong: 'Имя указано не верно',
    lastNameEmpty: 'Нужно указать фамилию',
    lastNameWrong: 'Фамилия указано не верно',
    passwordEmpty: 'Нужно указать пароль',
    passwordWrong: 'Пароль указан не верно'
  }

  state = {
    success: false,
    firstName: '',
    lastName: '',
    password: '',
    errorMessages: {
      firstName: '',
      lastName: '',
      password: ''
    }
  }

  onInputChange = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
      errorMessages: {
        firstName: '',
        lastName: '',
        password: ''
      }
    });

    // this.setState(() => {
    //   return {[name + 'Value']: e.target.value}
    // })
  }

  checkEmptyField = (fieldsData, fieldName) => {
    if(!fieldsData[fieldName]) {
      return {
        errorMessages: {
          firstName: this.errorPhrases.firstNameEmpty
        }
      }
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const { success, errorMessages,...fieldsData } = this.state;
    // console.log(this.props);
    // console.log(data);
    // console.log(this.state);
    console.log(fieldsData.firstName)
    if(!fieldsData.firstName) {
      this.setState({
        errorMessages: {
          firstName: this.errorPhrases.firstNameEmpty
        }
      });
    }

    if(!fieldsData.lastName) {
      this.setState({
        errorMessages: {
          lastName: this.errorPhrases.lastNameEmpty
        }
      });
    }
   
    // if(data.firstName === this.props.firstName) {
    //   setTimeout(() => {
    //     this.setState({
    //       success: true
    //     })
    //   }, 1500)
      
    //}
  }

  // showErrorMessage = (e) => {
  //   if(!e.target.value) {
      
  //   }
  // }

  render() {
    //console.log(this.props)
    const { success } = this.state;
    return (
      success ? 
      <img src={bond} alt="bond approve" className="t-bond-image" />
      :
      <form className="form" onSubmit={this.onSubmit}>
        <h1>Введите своё имя, агент</h1>
        <p className="field">
          <label htmlFor="firstName" className="field__label">
            <span className="field-label">Имя</span>
          </label>
          <input 
            className="field__input field-input t-input-firstname" 
            name="firstName"
            type="text"
            onChange={this.onInputChange}
          />
          <span className="field__error field-error t-error-firstname">{this.state.errorMessages.firstName}</span>
        </p>
        <p className="field">
          <label htmlFor="lastName" className="field__label">
            <span className="field-label">Фамилия</span>
          </label>
          <input 
            className="field__input field-input t-input-lastname" 
            name="lastName" 
            type="text"
            onChange={this.onInputChange}
          />
          <span className="field__error field-error t-error-lastname">{this.state.errorMessages.lastName}</span>
        </p>
        <p className="field">
          <label htmlFor="password" className="field__label">
            <span className="field-label">Пароль</span>
          </label>
          <input 
            className="field__input field-input t-input-password" 
            type="password"
            name="password"
            onChange={this.onInputChange}
          />
          <span className="field__error field-error t-error-password">{this.state.errorMessages.passwordName}</span>
        </p>
        <div className="form__buttons">
          <input type="submit" className="button t-submit" value="Проверить" />
        </div>
      </form>
    )
  }
}
