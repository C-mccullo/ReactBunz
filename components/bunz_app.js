import React from 'react';
import firebase from 'firebase';
import Login from './logIn';
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

    if (!this.state.loggedIn) {
      // This will be the login component
      return <Login onLogin={ this.login } />
    } else {

      var posts = this.state.posts;

      return (
        <div>
          <div className="header-bar">
            <h2>Welcome, { this.state.currentUser }</h2>
            <button className="button nav-log-out" onClick={ this.logout }>Log Out</button>
          </div> 

          <div className="flex-container">
            { Object.keys(posts).map((id) => {
              console.log(posts[id]);
              return (
                <Post key={id}
                      currentUser = { this.state.currentUser }
                      post={ posts[id] }
                      // Can import firebase into Post component and have post talk to firebase directly to delete 
                      onDeletePost = { () => this.deletePost(id) }
                      onCommentAdded = { (comment) => this.addComment(comment,id) } />
              )
            })}
          </div>
          <NewPost onAddPost={ this.addPost }/>        
        </div>
      )
    }
  },
  
  // sets the state of LoggedIn to true --> the list of posts the gets returned
  login: function(email) {
    this.setState({ loggedIn: true, currentUser: email });
  },

  logout: function() {
    this.setState({ loggedIn: false, currentUser: "" });
  },

  // Sets the state of currentUser to email
  setCurrentUser: function(event) {
    var currentUser = this.state.currentUser
    console.log(currentUser)
    this.setState({ currentUser: event.target.value });
  },

  // Adds the newPost Object to the posts Array
  addPost: function(newPost) {
    newPost.author = this.state.currentUser
    console.log(newPost);
    this.firebaseRef.push(newPost);
  },
  // Can move this function to post Component **** Will also need to delete instance of picture from File-stack;
  deletePost: function(id) {
    this.firebaseRef.child(id).remove();
  },

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

  componentDidMount: function() {
    var component = this;
    // reference to the database that we want
    this.firebaseRef = firebase.database().ref("posts");
    this.firebaseRef.on("child_added", (dataSnapshot) => {
      // this is assigning the key that firebase generates to the key of the message
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
