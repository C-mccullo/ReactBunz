import React from 'react';
import PostComment from './postComments';
import NewComment from './newComment';

var IndividualPost = React.createClass({
  render: function() {
    // the id is being passed down through this.props.children, so all I will need to do is access the post inside posts with the id of this.props.params.id, I can then access all of the properties on that object with id of ____
    
    var singlePost = this.props.posts[this.props.params.id];
    var id = this.props.params.id;
    // For waiting to app data to populate
    if (!singlePost) { return <div>Loading...</div> }

    return (
      <div className="post flex-child">
        <div className="title">
          <h3> { singlePost.title } </h3>
        </div>
        <div className='author'>
          <h4> { singlePost.author } </h4>
        </div>
        <div className="image">
          { singlePost.picture !== "" ? <img src={ this.props.post.picture } alt=""></img> : <img src="http://placekitten.com/250/300" alt=""/> }
        </div>
        <div className="description"> { singlePost.description }</div>
        <div className="comments">
          { typeof( singlePost.comments) !== 'undefined' ? 
            singlePost.comments.map((comment, id) => {
              return (
                <PostComment comment={ comment }/>
              )
            }) : null
          }
        </div>
        <NewComment onCommentAdded={ this.addComment.bind(this, id) }/>
      </div>
    );
  },
  addComment: function(id, comment) {
    console.log(id, comment);
    this.props.onCommentAdded(comment, id);
  },
  deletePost: function(id) {
    this.props.onDeletePost(id);
  }
})

export default IndividualPost;
