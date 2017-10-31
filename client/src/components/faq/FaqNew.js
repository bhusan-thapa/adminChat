//shows both form and review
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import FaqForm from './FaqForm';
import FaqFormReview from './FaqFormReview';
class FaqNew extends Component {
  state = { showReview: false };
  renderContent() {
    if (this.state.showReview) {
      return (
        <FaqFormReview onCancel={() => this.setState({ showReview: false })} />
      );
    }
    return <FaqForm onFaqSubmit={() => this.setState({ showReview: true })} />;
  }
  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'faqForm'
})(FaqNew);
