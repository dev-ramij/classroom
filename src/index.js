import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import AllCourses from './components/all-courses/allCourses';
import Subjects from './components/subject/subject';
import Educator from './components/educator/educator';

ReactDOM.render(<App />, document.getElementById('root'));

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/educator">
                    <Educator />
                </Route>
                <Route path="/courses">
                    <AllCourses />
                </Route>
                <Route path="/subjects">
                    <Subjects />
                </Route>
                <Route path="/">
                    <Redirect to="/educator" />
                </Route>
            </Switch>

        </Router>


    )
} 