import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { Greeting } from './Greeting'
import { Counter } from './Counter'
const routing = (
    <Router>
        <div>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/greeting">
                    <li>Greeting</li>
                </Link>
                <Link to="/counter">
                    <li>Counter</li>
                </Link>
            </ul>
            <Route exact path="/" component={App} />
            <Route path="/greeting" render={(routeProps) => (<Greeting {...routeProps} {...name = "George"} />)} />
            <Route path="/counter" component={Counter} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'

// ReactDOM.render(<App />, document.getElementById('root'))
