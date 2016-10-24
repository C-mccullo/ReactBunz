import React from 'react'

var PostComment = React.createClass({
	render: function() {
		return (
			<div className="comment-box">
				<h3>{ this.props.comment.author }</h3>
				<p>{ this.props.comment.message }</p>
			</div>
		)
	}
})