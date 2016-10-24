import React from 'react';

// Import Firebase if you want to Post component to interact with Firebase directly to remove Post
// import firebase from 'firebase';


var Post = React.createClass({
  render: function() {
    return(
      <div className="post flex-child">
        <div className="delete-button">
          { this.props.post.author == this.props.currentUser ? <button onClick={ this.props.onDeletePost } className="delete">X</button> : null } 
        </div>
        <div className="title">
          <h3> { this.props.post.title } </h3>
        </div>
        <div className='author'>
          <h4> { this.props.post.author } </h4>
        </div>
        <div className="image">
          <img src="https://placekitten.com/200/200" alt=""></img>
          { this.props.post.picture }
        </div>
        <div className="description"> { this.props.post.description }</div>
      </div>
    )
  },
})

export default Post

// { Object.keys(this.props.post.comments).map((id) => {
//   return (
//     <PostComment>
//   )
// })}
