import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import "../src/assets/css/typhography.css";

import Home from './screen/Home'
import About from './screen/About'
import Contact from './screen/Contact'
import ProductList from './screen/ProductList'
import Header from './layout/header'
import { Provider } from 'react-redux';
import store from './store'
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/products' component={ProductList} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}


ReactDOM.render(<App />, document.getElementById("app"));