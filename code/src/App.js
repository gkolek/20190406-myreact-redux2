import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Route
} from 'react-router-dom';

import store from './store';
import Register from './Register';
import Login from './Login';
import Logout from './Logout';
import Cats from './Cats';
import Hello from './Hello';
import RestrictedRoutes from './RestrictedRoutes';
import Menu from './Menu';
import Avatar from './Avatar';
import Upload from './Upload';
import Notifications from './ui/containers/Notifications';

import { auth } from './firebase';

class App extends Component {

  state = {
    isAuthorized: false,
    user: {}
  }

  componentDidMount() {
    // db.ref('/cats').remove();
    auth.onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({
          isAuthorized: true,
          user: user.providerData[0]
        });
        // console.log(auth.currentUser);
      } else {
        this.setState({ isAuthorized: false });
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
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Notifications />
            <Menu isAuthorized={this.state.isAuthorized} />
            {this.state.isAuthorized ? <Avatar user={this.state.user} /> : null}
            <Route exact path="/" component={this.state.isAuthorized ? Cats : null} />

            <RestrictedRoutes isAuthorized={this.state.isAuthorized}>
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
      </Provider>
    );
  }
}

export default App;
