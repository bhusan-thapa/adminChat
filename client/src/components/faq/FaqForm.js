import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import FaqField from './FaqField';
import formFields from './formFields';

class FaqForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={FaqField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.props.handleSubmit(this.props.onFaqSubmit)}>
          {this.renderFields()}
          <Link to="/dashboard" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const error = {};
  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      error[name] = `Please provide a value`;
    }
  });
  return error;
}
export default reduxForm({
  validate,
  form: 'faqForm',
  destroyOnUnmount: false
})(FaqForm);
