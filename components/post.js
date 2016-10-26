import React from 'react';
import NewComment from './newComment';
import PostComment from './postComments';

// Import Firebase if you want to Post component to interact with Firebase directly to remove Post
// import firebase from 'firebase';

// try using const!!!

var Post = React.createClass({
  render: function() {
    console.log(this.props.post.comments);
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
        <div className="comments">
          { typeof(this.props.post.comments) !== 'undefined' ? 
            this.props.post.comments.map((comment, id) => {
              return (
                <PostComment comment={comment}/>
              )
            }) : null
          }
        </div>
        <NewComment onCommentAdded={ this.props.onCommentAdded }/>
      </div>
    )
  },
})

export default Post


