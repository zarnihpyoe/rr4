import React from 'react'
import {
  BrowserRouter as Router,
  Route,
 } from 'react-router-dom'

const Home = (props) => {
  /* to checkout what's inside props which got passed in when the route calls the component */
  console.log(props)
  return (<h1>Home</h1>)
}

const App = () => (
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/about' render={() => <h1>About</h1>} />
      <Route
        path='/contact'
        children={({match}) => match && <h1>Contact</h1>} />
    </div>
  </Router>
)

export default App
