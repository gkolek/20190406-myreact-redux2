import React, { Component } from 'react';

import { auth } from './firebase';

class Register extends Component {

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
    .createUserWithEmailAndPassword(
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

  render() {
    return(
      <div>
        <h2>Register:</h2>
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

export default Register;
