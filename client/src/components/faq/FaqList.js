import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFaq } from '../../actions';

class FaqList extends Component {
  componentDidMount() {
    this.props.fetchFaq();
  }
  renderFaq() {
    return this.props.faqs.reverse().map(faq => {
      return (
        <div key={faq._id} className="card darken-1">
          <div className="card-content">
            <span className="card-title">FAQ</span>
            <p>
              {faq.question}
            </p>
            <p className="right">
              Created on: {new Date(faq.date).toLocaleDateString()}
            </p>
            <div className="card-action">
              <a>
                Answer: {faq.answer}
              </a>
              <a>
                Intent: {faq.intent}
              </a>
              <a>
                Entity: {faq.entity}
              </a>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        {this.renderFaq()}
      </div>
    );
  }
}

function mapStateToProps({ faqs }) {
  return { faqs };
}

export default connect(mapStateToProps, { fetchFaq })(FaqList);
