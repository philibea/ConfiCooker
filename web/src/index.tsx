import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Router} from 'react-router-dom'
import {createBrowserHistory as createHistory} from 'history'
import './index.css'
import App from './App'
const history=createHistory()


ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>,
    document.getElementById('root')
)
