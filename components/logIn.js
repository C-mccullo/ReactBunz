import React from 'react';
import firebase from 'firebase';
import { browserHistory } from 'react-router';

var Login = React.createClass({
  getInitialState: function() {
    return {
      email: '',
      password: '',
      mode: 'login',
      error: null
    }
  },

  render: function() {
    return <div className='splash'>
      { this.state.error ? <div className='error'>{ this.state.error }</div> : null }
      <div className='login-option'>
        <label className={ this.state.mode == 'login' ? 'selected' : ''}>
          <input type='radio' value='login' checked={ this.state.mode == 'login' } onChange={ this.setMode } />
          Login
        </label>
        <label className={ this.state.mode == 'signup' ? 'selected' : ''}>
          <input type='radio' value='signup' checked={ this.state.mode == 'signup' } onChange={ this.setMode } />
          Signup
        </label>
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='text' className='form-control' name='email' value={ this.state.email } onChange={ this.setEmail } />
      </div>
      <div>
        <label htmlFor='email'>Password</label>
        <input type='password' className='form-control' name='password' value={ this.state.password } onChange={ this.setPassword } />
      </div>
      <div>
        <button className="button" onClick={ this.login  }>
          { this.state.mode == 'login' ? "Login" : "Sign Up" }
        </button>
      </div>
    </div>
  },

  setEmail: function(evt) { this.setState({ email: evt.target.value }); },
  setPassword: function(evt) { this.setState({ password: evt.target.value }); },
  setMode: function(evt) { this.setState({ mode: evt.target.value }); },

  // THIS IS THE LOGIN FUNCTION YOU WILL NEED

  login: function() {
    var result;
    if (this.state.mode == 'login') {
      result = firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    } else {
      result = firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    }
    // After firebase has created or logged in the user it will push towards the route of app component and not be redirected towards the /login route.
    result.then((data) => {
      browserHistory.push('/');
    })
    .catch((error) => {
      this.setState({error: error.message});
    })
  }

  // login: function() {
  //   var component = this;
  //   if (this.state.mode == 'login') {
  //     firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
  //     .then(function() {
  //       component.props.onLogin(component.state.email);
  //       browserHistory.push('/')
  //     })
  //     .catch(function(error) {
  //       component.setState({ error: error.message })
  //     })
  //   } else {
  //     firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
  //     .then(function() {
  //       component.props.onLogin(component.state.email)
  //     })
  //     .catch(function(error) {
  //       component.setState({ error: error.message })
  //     })
  //   }
  // }
})

export default Login;