import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom'

import './App.css'

const App = () => (
  <Router>
    <div>
      <Route path='/:page?/:subpage?' render={({match}) => (
          /* in path : means parameter, ? means optional */
          <h1>
            PAGE: {match.params.page || 'home'}
            <br />
            SUBPAGE: {match.params.subpage}
          </h1>
        )} />

      <Route path='/:page?-:subpage?' render={({match}) => (
          /* in path - can be used instead of / for flexibility */
          <h1>
            PAGE: {match.params.page || 'home'}
            <br />
            SUBPAGE: {match.params.subpage}
          </h1>
        )} />
    </div>
  </Router>
)

export default App
