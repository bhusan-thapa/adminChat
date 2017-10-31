import React from 'react';
import { Link } from 'react-router-dom';
import FaqList from './faq/FaqList';
const Dashboard = () => {
  return (
    <div>
      <FaqList />
      <div className="fixed-action-btn">
        <Link to="/faq/new" className="btn-floating btn-large orange">
          <i className="large material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
