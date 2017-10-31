import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';

const FaqFormReview = ({ onCancel, formValues, submitFaq, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>
          {label}
        </label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });
  return (
    <div>
      <h4>Please review ur faq questions</h4>
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className="green white-text btn-flat right"
        onClick={() => submitFaq(formValues, history)}
      >
        Send
        <i className="material-icons right">chat_bubble</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.faqForm.values };
}
export default withRouter(connect(mapStateToProps, actions)(FaqFormReview));
