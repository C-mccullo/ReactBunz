import React from 'react';

var IndividualPost = React.createClass({
  render: function() {
    return(
      <div className="post flex-child">
        <div className="delete-button">
          { this.props.post.author == this.props.currentUser ? <button onClick={ this.props.onDeletePost } className="delete">X</button> : null } 
        </div>
        <div className="title">
          <h3> { this.props.post.title } </h3>
          <h5>{ this.props.post.key }</h5>
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
            <postComments comment={ this.props.post.comments }/> : null
          }
        </div>
        <NewComment onCommentAdded={ this.props.onCommentAdded }/>
      </div>
    )
  }
})

export default IndividualPost;
