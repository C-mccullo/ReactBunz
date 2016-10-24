import React from 'react'

var PostComment = React.createClass({
	render: function() {
		return (
			<div className="comment-box">
				<h3>{ this.props.author }</h3>
				<p>{ this.props.message }</p>
			</div>
		)
	}
})