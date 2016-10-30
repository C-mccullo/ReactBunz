import React from 'react';
import { browserHistory, Link } from 'react-router';
import firebase from 'firebase';

import Login from './logIn';
import PostList from './postList';
import Post from './post';
import NewPost from './newPost';

var BunzApp = React.createClass({
  getInitialState: function() {
    return {
      newPost: {
        // title: "",
        // description: "",
        // deal: false,
        // picture: "",
        // comment: "this is the first comment"
      },
      posts: [],
      currentUser: null,
      loggedIn: false
    }
  },
  
  render: function() {
    console.log(this.props.children);

    if (!this.state.loggedIn) {
      return <Login onLogin={ this.login } />
    } else {

      return (
        <div>
          <div className="header-bar">
            <h2>Welcome, { this.state.currentUser }</h2>
            <Link to="/new-post" > Make a New Post</Link>
            <button className="button nav-log-out" onClick={ this.logout }>Log Out</button>
          </div> 


          <PostList posts={ this.state.posts } />
          
          <NewPost onAddPost={ this.addPost }/>
        </div>
      )
    }
  },
  // *** Need to pass addComment function to PostList as props ***
  addComment: function(comment, id) {
    var postRef = this.firebaseRef.child(id);
    var post = this.state.posts[id];
    if (typeof post.comments === 'undefined') {
      post.comments = []
    }
    post.comments.push({ author: this.state.currentUser, message: comment });
    postRef.set(post);
    this.setState({ posts: this.state.posts });
  },
  // **************************************************************

  login: function(email) {
    this.setState({ loggedIn: true, currentUser: email });
    console.log(this.state.currentUser);
  },

  setCurrentUser: function(event) {
    var currentUser = this.state.currentUser
    this.setState({ currentUser: event.target.value });
  },

  logout: function() {
    this.setState({ loggedIn: false, currentUser: "" });
  },

  // Adds the newPost Object to the posts Array
  addPost: function(newPost) {
    newPost.author = this.state.currentUser
    console.log(newPost);
    this.firebaseRef.push(newPost);
  },
  deletePost: function(id) {
    this.firebaseRef.child(id).remove();
  },


  // finding the post with the id in firebase and application state, if post comments is undefined turn it into an array. then push the comment object (author = current user) to the comment array on post. Update state and firebase.  
  componentDidMount: function() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true, currentUser: user.email});
      } else {
        browserHistory.push('/login');
      }
    })
    // reference to the data (posts) that we want, stored in a variable
    this.firebaseRef = firebase.database().ref("posts");

    // this is assigning the key that firebase generates to the key of the message
    this.firebaseRef.on("child_added", (dataSnapshot) => {
      var posts = this.state.posts;
      posts[dataSnapshot.key] = dataSnapshot.val();
      this.setState({ posts: posts });
      window.scrollTo(0, document.body.clientHeight);
    });

    this.firebaseRef.on("child_removed", (dataSnapshot) => {
      var posts = this.state.posts;

      delete posts[dataSnapshot.key];
      this.setState({ posts: posts });
    });
  } 
})

module.exports = BunzApp;

// { React.cloneElement(this.props.children, {
//   currentUser: this.state.currentUser,
//   posts: this.state.posts,
//   newPost: this.state.newPost,
//   onCommentAdded: { (comment) => this.addComment(comment,id) },
//   firebaseRef: this.firebaseRef,
//   onDeletePost: { (id) => this.deletePost(id) }
//   // ^ 
//   // this is really handy because you can push to firebase from child components and the firebase component will be notified and pass back information to the parent, resulting in state being updated without having to bubble up functions back to the App component
//   // *** add any additional props you want your children to have here as well ***
// }) } 

// <div className="flex-container">
//   {/* This is the Working map function for Post right now */}
//   { Object.keys(posts).map((id) => {
//     return (
//       <Post key={id}
//             currentUser = { this.state.currentUser }
//             post={ posts[id] } 
//             onDeletePost = { () => this.deletePost(id) }
//             onCommentAdded = { (comment) => this.addComment(comment,id) } />
//     )
//   })}
// </div>

<PostList posts={ this.state.posts } 
          onAddComment={ () => this.addComment(comment, id) }/>
<NewPost onAddPost={ this.addPost }/>