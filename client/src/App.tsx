import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { GlobalStyles } from './styles/GlobalStyles';

//? PAGE COMPONENTS or ROUTES
import Home from './pages/Home';

//? OTHER COMPONENTS
import { Nav } from './components';

const App: React.FC = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <GlobalStyles />
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
