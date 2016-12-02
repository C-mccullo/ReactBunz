import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Login from './logIn';
import BunzApp from './bunz_app';
import NewPost from './newPost';
import PostList from './postList';
import IndividualPost from './individualPost';



var Routes = React.createClass({
  render: function() {
    return <Router history={ browserHistory }>
      <Route path='/login' component={ Login } />
      <Route path='/' component={ BunzApp }>
      	<IndexRoute component={ PostList }/>
				<Route path='/new-post' component={ NewPost } />
        <Route path='/posts' component={ PostList } />
        <Route path='/posts/:id' component={ IndividualPost } />
      </Route>
    </Router>
  }
});


export default Routes

// this.props.params.id = 'JFKLDSJFKLDSJ'
// this.props.posts[this.props.params.id]