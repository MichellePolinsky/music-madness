import React, { Component } from 'react'
import HomePage from './components/HomePage.js'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Fleet from './components/Fleet'
import Rainbow from './components/Rainbow'
import Broken from './components/Broken'

class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <h1></h1>
          <nav>
            <ul className="nav-bar">
              <li className="nav-link">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-link">
                <Link to="/Rainbow">Rainbow Kitten Surprise</Link>
              </li>
              <li className="nav-link">
                <Link to="/Broken">Broken Social Scene</Link>
              </li>
              <li className="nav-link">
                <Link to="/Fleet">Fleet Foxes</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/broken" component={Broken}></Route>
          <Route exact path="/rainbow" component={Rainbow}></Route>
          <Route exact path="/fleet" component={Fleet}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App
