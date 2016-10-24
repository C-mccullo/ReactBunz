import React from 'react';

var NewPost = React.createClass({
	getInitialState: function() {
		return {
			newPost: {
        title: "",
        description: "",
        deal: false,
        picture: "",
        comments: [] 
      }
		}
	},

	render: function() {
		return (
			<div className='newPost'>
				<h3>Add a New Post</h3>
				<input type='text' name="title" value={ this.state.newPost.title } onChange={ this.updateField } placeholder="Title" />
				<input type='text' name="description" value={ this.state.newPost.description } onChange={ this.updateField } placeholder="Description" />
				<button onClick={ () => this.props.onAddPost(this.state.newPost) }>Add Message</button>
			</div>
		)
	},

	updateField: function(event) {
    var newPost = this.state.newPost;
    // console.log(newPost);
    newPost[event.target.name] = event.target.value;
    this.setState({ newPost: newPost });
  }


	// updateNewPostTitle: function(event) {
  //   var newPost = this.state.newPost;
  //   console.log(newPost.title);
  //   newPost.title = event.target.value;
  //   this.setState({ newPost: newPost });
  // }

})

export default NewPost 