import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { GlobalStyles } from './styles/GlobalStyles';

import { Home } from './components/pages';

const App: React.FC = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <GlobalStyles />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
