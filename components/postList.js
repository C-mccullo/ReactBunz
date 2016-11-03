import React from 'react';
import Post from './post';


var PostList = React.createClass({
  render: function() {
    var posts = this.props.posts;
    return (
      <div className="flex-container">
        { Object.keys(posts).map((id) => {
          // console.log(posts[id]);
          return (
            <Post key = {id}
                  currentUser = { this.props.currentUser }
                  post = { posts[id] }
                  onDeletePost = { this.deletePost.bind(this, id) }
                  onCommentAdded = { this.addComment.bind(this, id) } />
          )
        })}
      </div>
    )
  },

  addComment: function(id, comment) {
    console.log(id, comment);
    this.props.onCommentAdded(comment, id);
  },
  deletePost: function(id) {
    this.props.onDeletePost(id);
  }
})

export default PostList