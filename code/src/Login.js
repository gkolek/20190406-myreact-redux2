import React, { Component } from 'react';

import { auth, googleProvider, facebookProvider } from './firebase';

class Login extends Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    // this.setState({ email: 'patryk.omiotek@gmail.com' });
    // this.setState({ password: 'ala123' });
  }

  handleSubmit = (event) => {
    auth
    .signInWithEmailAndPassword(
      this.state.email, this.state.password
    )
    .then(response => {
      console.log('Response: ', response);
      this.props.history.push('/');
    })
    .catch(error => {
      console.error(`Error: ${error.code} ${error.message}`);
    })
    console.log(this.state);
    this.setState({ email: '', password: '' });
    event.preventDefault();
  }

  handleGoogleLogin = () => {
    auth
    .signInWithPopup(googleProvider)
    .then(response => {
      console.log('Response: ', response);
      this.props.history.push('/');
    })
    .catch(error => {
      console.log(`Error: ${error.code} ${error.message}`);
    });
  }

  handleFacebookLogin = () => {
    auth
    .signInWithPopup(facebookProvider)
    .then(response => {
      console.log('Response: ', response);
      this.props.history.push('/');
    })
    .catch(error => {
      console.log(`Error: ${error.code} ${error.message}`);
    });
  }

  render() {
    return(
      <div>
        <h2>Login:</h2>
        <div>
          <button onClick={this.handleGoogleLogin}>Login with Google</button>
          <button onClick={this.handleFacebookLogin}>Login with Facebook</button>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div>
            <input onChange={this.handleChange} type="email" name="email" value={this.state.email} placeholder="E-mail" />
          </div>
          <div>
            <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder="Password" />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
