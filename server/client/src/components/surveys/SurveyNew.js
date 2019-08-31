//SurveyNew shows SurveyForm and SurveyConfirm
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm'
import SurveyReview from './SurveyReview'
class SurveyNew extends Component {
    state = { showSurveyReview: false }; //CRA allows this

    renderContent() {
        if (this.state.showFormReview) {
            return <SurveyReview onCancel={() => this.setState({ showFormReview: false })} />
        }

        return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })} />;
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew)