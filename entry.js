import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router';
import Routes from './components/routes';

import firebase from'firebase';
import filepicker from 'filepicker-js';

import BunzApp from './components/bunz_app';
import Login from './components/logIn';
import NewPost from './components/newPost';
// Initialize Firebase
var config = {
	apiKey: "AIzaSyD5T1HUes_FpntKMWg7pqshsl-Oa5UYNRU",
    authDomain: "reactbunz.firebaseapp.com",
    databaseURL: "https://reactbunz.firebaseio.com",
    storageBucket: "reactbunz.appspot.com",
    messagingSenderId: "969409465695"
};
firebase.initializeApp(config);

// ****************************************************
// 						For Filestack Initialization
// ****************************************************
filepicker.setKey("AZ9lOpFRSXqONgNMydFumz");

// ****************************************************
// 						START REACTDOM.render APP
// ****************************************************


ReactDOM.render(
	<Routes/>
	, document.getElementById("placeholder")); 

// 1. User Logs In /Signs in to App (Use Index Router --> Login Component save currentUser setState login: true )
// 2. Make navigation component that will allow people to go to form to make new post or view list of posts
// 3. After login render the list of all posts Object.keys(posts).map((id) => {}
// 4. Add feature that will allow people to delete their posts.

// <Router history={browserHistory}>
// 	<Route path='/' component={BunzApp}>
// 	</Route>
// 	<Route path='/login' component={Login}/>
// 	<Route path='/new-post' component={NewPost}/>
// </Router>