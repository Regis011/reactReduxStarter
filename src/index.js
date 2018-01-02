import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import Header from './components/header';
import Footer from './components/footer';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import HomeAlert from './components/alert';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostShow from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div className="App">
      <Header />
      <section className="container">
        <div className="row">
          <Switch>
            <Route path="/posts/new" component={PostsNew} />
            <Route path="/posts/:id" component={PostShow} />
            <Route path="/posts" component={PostsIndex} />
            <Route path="/" component={HomeAlert} />
         </Switch>
        </div>
      </section>
      <Footer />
    </div>
  </BrowserRouter>
</Provider>,
  document.getElementById('root')
);
// Single Page Application
// ReactDOM.render(
//   <App />, document.getElementById('root')
// );
registerServiceWorker();
