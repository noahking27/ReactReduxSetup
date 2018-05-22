import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { updateUser, apiRequest } from './actions/userActions';

class App extends Component {

  onUpdateUser = (event) => {
    this.props.onUpdateUser(event.target.value);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.onApiRequest();
    }, 3000);
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>Update User</h3>
        <input onChange={this.onUpdateUser} />
        <br />
        {this.props.user}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  products: state.products,
  user: state.user
});

const mapActionsToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest
};

export default connect(mapStateToProps, mapActionsToProps)(App);
