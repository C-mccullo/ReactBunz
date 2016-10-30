import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Login from './logIn';
import BunzApp from './bunz_app';
import NewPost from './newPost';
import PostList from './postList';



var Routes = React.createClass({
  render: function() {
    return <Router history={ browserHistory }>
      <Route path='/login' component={ Login } />
      <Route path='/' component={ BunzApp }>
      	<IndexRoute component={ PostList }/>
				<Route path='/new-post' component={ NewPost } />
      </Route>
      <Route path='/post-list' component={ PostList }></Route>
    </Router>
  }
});

export default Routes
// <Route path='posts/:id' component={ IndividualPost } />
// this.props.params.id = 'JFKLDSJFKLDSJ'

// this.props.posts[this.props.params.id]