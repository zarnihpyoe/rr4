import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

import './App.css'

const Links = () => (
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/contact'>Contact</Link>
  </nav>
)

const App = () => (
  <Router>
    <div>
      <Links />
      <Switch>
        <Route exact path='/' render={() => <h1>Home</h1>} />
        <Route path='/about' render={() => <h1>About</h1>} />
        {/** if we use Route without specifying path, it's gonna match to any path **/}
        <Route render={() => <h1>Page not Found</h1>} />
      </Switch>
    </div>
  </Router>
)

export default App
