import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { GlobalStyles } from './styles/GlobalStyles'

//? CONTEXTS
import { AuthProvider } from './contexts/AuthContext'

//? PAGE COMPONENTS or ROUTES
import Home from './pages/Home'

//? OTHER COMPONENTS
import { Nav } from './components'

const App: React.FC = () => {
    const history = createBrowserHistory()

    return (
        <Router history={history}>
            <GlobalStyles />
            <AuthProvider>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </AuthProvider>
        </Router>
    )
}

export default App
