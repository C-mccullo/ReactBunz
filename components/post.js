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
          {this.props.post.picture !== "" ? <img src={ this.props.post.picture } alt=""></img> : <img src="http://placekitten.com/250/300" alt=""/> }
          
        </div>
        <div className="description"> { this.props.post.description }</div>
      </div>
      { Object.keys(this.props.post.comments).map((id) => {
        return (
          <PostComment comment={ this.props.post.comments[id] } />
        )
      })}
    )
  },
})

export default Post


