import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonLogin: false,
      nameLogin: '',
      loading: false,
      redirect: false,
    };
  }

  loginNameInput = (event) => {
    const a = event.target.value.length > 2
      ? this.setState({ buttonLogin: true })
      : this.setState({ buttonLogin: false });
    this.setState({ nameLogin: event.target.value });
    return a;
  };

  render() {
    const { nameLogin, buttonLogin, redirect, loading } = this.state;
    return (
      <div data-testid="page-login">
        <div>
          <input
            type="text"
            data-testid="login-name-input"
            onChange={ this.loginNameInput }
            placeholder="Your name"
          />
          <button
            type="button"
            disabled={ !buttonLogin }
            data-testid="login-submit-button"
            onClick={ () => {
              this.setState({ loading: true }, async () => {
                await createUser({ name: nameLogin });
                this.setState({
                  loading: false,
                  redirect: true,
                });
              });
            } }
          >
            Log in
          </button>
          {redirect && <Redirect to="/search" />}
          {loading && <Loading />}
        </div>
      </div>
    );
  }
}

export default Login;
