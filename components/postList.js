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
            <Post key={id}
                  currentUser={ this.props.currentUser }
                  post={ posts[id] }
                  onDeletePost={ this.props.onDeletePost }
                  onCommentAdded={ (id) => this.props.onCommentAdded } />
          )
        })}
      </div>
    )
  }
})

export default PostList