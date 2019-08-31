import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import { connect } from 'react-redux'; // Gives certain components the ability to call actionCreators
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew'



class App extends Component {
    componentDidMount() {
        this.props.fetchUser(); //Action creators are linked to props because of the "connect" call that is exported at the bottom of this code file?
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div className="container">
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);