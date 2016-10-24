import React from 'react';
import filepicker from 'filepicker-js';

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
				<button className="button" onClick={ this.addPicture }>Add Image</button>
				<input type='text' name="description" value={ this.state.newPost.description } onChange={ this.updateField } placeholder="Description" />

				<button className="submit" onClick={ () => this.props.onAddPost(this.state.newPost) }>Add Message</button>
			</div>
		)
	},

	updateField: function(event) {
    var newPost = this.state.newPost;
    newPost[event.target.name] = event.target.value;
    this.setState({ newPost: newPost });
  },

	addPicture: function() {
		var newPost = this.state.newPost;
		filepicker.pick(
			{
			  mimetype: 'image/*',
			  maxsize: '10485760',
			  container: 'modal',
			  services: ['COMPUTER']
			},

			function(Blob){
			  newPost.picture = Blob.url.toString();
			  console.log(newPost);
			},
			function(FPError){
			 console.log(FPError.toString());
			}
		).then(function() {
			this.setState({ newPost: newPost });
		})
	}

	// updateNewPostTitle: function(event) {
  //   var newPost = this.state.newPost;
  //   console.log(newPost.title);
  //   newPost.title = event.target.value;
  //   this.setState({ newPost: newPost });
  // }

})

export default NewPost 