import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  Prompt,
} from 'react-router-dom'

import './App.css'

const loggedIn = false

const Links = () => (
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/form'>Form</Link>
  </nav>
)

class Form extends React.Component {
  state = { dirty: false }
  setDirty = () => this.setState({ dirty: true })

  render() {
    return (
      <div>
        <h1>Form</h1>
        <input type='text' onInput={this.setDirty} />
        <Prompt
          when={this.state.dirty}
          message='You data will be lost. Still leaving the page?'
          />
      </div>
    )
  }
}

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path='/' render={() => (<h1>Home</h1>)} />
      <Route path='/form' component={Form} />
    </div>
  </Router>
)

export default App
