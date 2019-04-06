import React, { Component } from 'react';

import { auth } from './firebase';

class Logout extends Component {

  componentDidMount() {
    auth.signOut()
    .then(response => {
      this.props.history.push('/');
    })
    .catch(error => {

    })
  }

  render() {
    return(
      <div></div>
    );
  }
}

export default Logout;
