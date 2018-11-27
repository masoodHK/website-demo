import React from 'react';
import { Route } from "react-router-dom";

import Home from './screens/Home'
import About from './screens/About'
import Discover from './screens/Discover'

const Routes = () => <div>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/discover" component={Discover}/>
</div>

export default Routes;