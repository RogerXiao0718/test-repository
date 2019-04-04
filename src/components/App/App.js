import React from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.css'
import Router, {Route, Link} from 'react-router'
import Header from '../Header'
import Home from '../Home'

export default function App(){
    return (
        <Router>
            <Route exact path='/Home' component={Home} />
        </Router>
    )
}