import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';

/*
* Home = '/'
* About = '/about'
* Contact = '/contact'
*/

const Router = () => {
    return (
        <React.Fragment>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
        </React.Fragment>
    )
}

export default Router;