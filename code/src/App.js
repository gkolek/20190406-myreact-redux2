import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter, Route
} from 'react-router-dom';

import Register from './auth/containers/Register';
import Login from './auth/containers/Login';
import Logout from './auth/containers/Logout';
import Cats from './cats/containers/Cats';
import Hello from './Hello';
import RestrictedRoutes from './RestrictedRoutes';
import Menu from './ui/components/Menu';
import Avatar from './Avatar';
import Upload from './Upload';
import Notifications from './ui/containers/Notifications';

import { auth } from './firebase';
import { login, logout } from './auth/actions';
import { showNotifications } from './ui/actions'

class App extends Component {

  // state = {
  //   isAuthorized: false,
  //   user: {}
  // }


  componentDidMount() {
    // db.ref('/cats').remove();
    auth.onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.props.login(user.providerData[0]);
        this.props.showNotifications('Woooow, udało się!')
        // this.setState({
        //   isAuthorized: true,
        //   user: user.providerData[0]
        // });
        // console.log(auth.currentUser);
      } else {
        this.props.logout()
      }
    })
  }

  // renderCats() {
  //   if (this.state.isAuthorized) {
  //     return <Cats />;
  //   }
  //   return null;
  // }

  render() {
    // const cats = this.state.isAuthorized ? <Cats /> : null;
    return (
      <BrowserRouter>
        <div>
          <Notifications />
          <Menu isAuthorized={this.props.isAuthorized} />
          {this.props.isAuthorized ? <Avatar user={this.props.user} /> : null}
          <Route exact path="/" component={this.props.isAuthorized ? Cats : null} />

          <RestrictedRoutes isAuthorized={this.props.isAuthorized}>
            <Route path="/beer" component={Hello} />
            <Route path="/beer-list" component={Hello} />
            <Route path="/create-beer" component={Hello} />
            <Route path="/upload" component={Upload} />
          </RestrictedRoutes>

          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          {/* {this.state.isAuthorized ? <Cats /> : null} */}
          {/* {cats} */}
          {/* {this.renderCats()} */}
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: state.auth.isAuthorized,
  user: state.auth.user
})

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
  showNotifications: (message) => dispatch(showNotifications(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
