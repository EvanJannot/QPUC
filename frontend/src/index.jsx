import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Rules from './pages/Rules'
import Leaderboard from './pages/Leaderboard'
import Suite4 from './pages/4suite'
import Error from './components/Error'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ConnexionProvider } from './utils/context'

ReactDOM.render(
  <React.StrictMode>
    <Router> 
      <ConnexionProvider>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/rules" component={Footer}>
            <Rules />
          </Route>
          <Route path="/leaderboard" component={Footer}>
            <Leaderboard />
          </Route>
          <Route path="/4suite" component={Footer}>
            <Suite4 />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </ConnexionProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
