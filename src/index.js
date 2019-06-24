import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { Greeting } from './Greeting'
import { Counter } from './Counter'
import { News } from './News'
import { Form } from './Form'
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
                <Link to="/news">
                    <li>News</li>
                </Link>
                <Link to="/form">
                    <li>Form</li>
                </Link>
            </ul>
            <Route exact path="/" component={App} />
            <Route path="/greeting" component={Greeting} />
            <Route path="/counter" component={Counter} />
            <Route path="/news" component={News} />
            <Route path="/form" component={Form} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
