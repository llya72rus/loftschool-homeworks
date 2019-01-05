import React, { Component } from 'react'
import Field from '../Field'
import './Form.css'
import bond from './assets/bond_approve.jpg';

export default class Form extends Component {
  
  errorPhrases = {
    emptyFields: {
      firstname: 'Нужно указать имя',
      lastname: 'Нужно указать фамилию',
      password: 'Нужно указать пароль'
    },
    wrongFields: {
      firstname: 'Имя указано не верно',
      lastname: 'Фамилия указана не верно',
      password: 'Пароль указан не верно'
    }
  }

  data = {
    firstname: 'James',
    lastname: 'Bond',
    password: '007'
  }

  labels = {
    firstname: 'Имя',
    lastname: 'Фамилия',
    password: 'Пароль'
  }


  state = {
    success: false,

    values: {
      firstname: '',
      lastname: '',
      password: '',
    },
 
    errorMessages: {
      firstname: '',
      lastname: '',
      password: ''
    }
  }

  onInputChange = (e) => {
    const name = e.target.name;
    console.log(this.state.values)
    this.setState({
      values: {
        ...this.state.values,
        [name]: e.target.value,
      },
      errorMessages: {
        firstname: '',
        lastname: '',
        password: ''
      }
    });

  }



  onSubmit = e => {
    e.preventDefault();
  
    for (const key in this.state.values) {
        if(!this.state.values[key]) {
          console.log(this.errorPhrases.emptyFields[key])
          console.log(key)
          this.setState({
            errorMessages: {
              ...this.state.errorMessages,
              [key]: this.errorPhrases.emptyFields[key] 
            }
          })
          console.log(this.state.errorMessages)
        } else if (this.state.values[key] !== this.data[key]) {
          console.log(this.errorPhrases.wrongFields[key]);
          this.setState({
            errorMessages: {
              ...this.state.errorMessages,
              [key]: this.errorPhrases.wrongFields[key] 
            }
          })
        }

    }
  }

  render() {
    const { success, values } = this.state;
    const fields = Object.keys(values).map((value) => {
      return (
        <Field 
          key={value}
          name={value} 
          type={value === "password" ? "password" : "text"} 
          label={this.labels[value]} 
          onInputChange={this.onInputChange}
          errorMessage={this.state.errorMessages[value]}
        />
      )
    });
    return (
      success ? 
      (<img src={bond} alt="bond approve" className="t-bond-image" />)
      :
      (<form className="form" onSubmit={this.onSubmit}>
        <h1>Введите свои данные, агент</h1>
        {fields}
        <div className="form__buttons">
          <input type="submit" className="button t-submit" value="Проверить" />
        </div>
      </form>)
    )
  }
}
