import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');
const user = {
  email: 'stu@dent.com',
  password: '123'
};

class AuthProvider extends PureComponent {
  state = {
    isAuthorized: false,
    authorizeError: '',
    email: user.email,
    password: user.password
  };

  authorize = (email, password) => {
    const { trueEmail, truePassword } = this.state;
    if (email === trueEmail && password === truePassword) {
      this.setState({
        isAuthorized: true,
        authorizeError: ''
      });
    } else {
      this.setState({
        authorizeError: 'Email или пароль введён не верно'
      });
    }
  };

  logout = () => {
    this.setState({
      isAuthorized: false,
      authorizeError: ''
    });
  };

  getProviderValue = () => {
    const { isAuthorized, authorizeError, email, password } = this.state;
    return {
      isAuthorized: isAuthorized,
      authorizeError: authorizeError,
      authorize: this.authorize,
      logout: this.logout,
      email: email,
      password: password
    };
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
