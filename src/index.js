import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import AllCourses from './components/all-courses/allCourses';
import Subjects from './components/subject/subject';
import Educator from './components/educator/educator';

ReactDOM.render(<App />, document.getElementById('root'));

function Test() {
    return (
        <h1>Happens</h1>
    )
}

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Educator />
                </Route>
                <Route path="/courses">
                    <AllCourses />
                </Route>
                <Route path="/subjects">
                    <Subjects />
                </Route>
            </Switch>

        </Router>


    )
} 