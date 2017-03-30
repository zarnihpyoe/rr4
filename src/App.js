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
      <Route path='/:a(\d{2}-\d{2}-\d{4}):b(\.[a-z]+)' render={({match}) => (
          /* in path : means parameter, ? means optional */
          <h1>
            paramA: {match.params.a || 'home'}<br />
            paramB: {match.params.b}
          </h1>
        )} />
    </div>
  </Router>
)

export default App
