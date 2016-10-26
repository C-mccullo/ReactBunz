import React from 'react'

var NewComment = React.createClass({
	getInitialState: function() {
			return (
				{
					comment: ""
				}
			);
	},
	render: function() {
		return(
			<div className="comment">
				<input type='text' name="message" value={this.state.comment} onChange={ this.updateComment } placeholder="message" />
				<button className="button" onClick={ this.addComment }>Add Comment</button>
			</div>
		)
	},

	updateComment: function(event) {
		this.setState({ comment: event.target.value })
	},
	addComment: function() {
		this.props.onCommentAdded(this.state.comment)
	}
});

export default NewComment