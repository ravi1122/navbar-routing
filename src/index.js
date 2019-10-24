import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import Navbar from './navbar';
import Calendar from './calender';
import CareerPage from './career-page';
import Reports from './reports';
import Inbox from './inbox';


const routing = (
  <Fragment>
    
    <Router>
    <Navbar />
        <Switch>
            
            <Route path="/inbox" component={Inbox} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/careerPage" component={CareerPage} />
            <Route path="/reports" component={Reports} />
          
        </Switch>
        
     
    </Router>
  </Fragment>
);

ReactDOM.render(routing , document.getElementById('app'));
