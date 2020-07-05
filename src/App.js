import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Login, Main, Order, Payment } from './pages';
import Menu from './components/Menu';

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/main" component={Main} />
        <Route path="/order" component={Order} />
        <Route path="/payment" component={Payment} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
