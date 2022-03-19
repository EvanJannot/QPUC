import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Rules from './pages/Rules'
import Leaderboard from './pages/Leaderboard'
import Suite4Theme from './pages/4suiteTheme'
import Suite4 from './pages/4suite'
import Gagnants9 from './pages/9gagnants'
import Score from './pages/Score'
import Error from './components/Error'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  ConnexionProvider,
  QuestionListProvider,
  SelectedAnswerProvider,
  ErrorProvider,
  ScoreProvider,
  ThemeProvider,
  TimeProvider,
} from './utils/context'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ConnexionProvider>
        <SelectedAnswerProvider>
          <QuestionListProvider>
            <ErrorProvider>
              <ScoreProvider>
                <ThemeProvider>
                  <TimeProvider>
                    <Header />
                    <Switch>
                      <Route exact path="/">
                        <Home />
                      </Route>
                      <Route path="/register">
                        <Register />
                      </Route>
                      <Route path="/rules">
                        <Rules />
                      </Route>
                      <Route path="/leaderboard">
                        <Leaderboard />
                      </Route>
                      <Route path="/9gagnants">
                        <Gagnants9 />
                      </Route>
                      <Route path="/4suiteTheme">
                        <Suite4Theme />
                      </Route>
                      <Route path="/4suite">
                        <Suite4 />
                      </Route>
                      <Route path="/score">
                        <Score />
                      </Route>
                      <Route path="*">
                        <Error />
                      </Route>
                    </Switch>
                    <Footer />
                  </TimeProvider>
                </ThemeProvider>
              </ScoreProvider>
            </ErrorProvider>
          </QuestionListProvider>
        </SelectedAnswerProvider>
      </ConnexionProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
