import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardDetailSidebar = () => (
  <ul className="card-detail-sidebar">
    <li className="card-detail-sidebar-list">
      <h3>Add to Card</h3>
      <ul className="card-detail-properties">
        <li className="button">
          <FontAwesomeIcon icon="user-alt" 
            className="fa-icon"
          /> &nbsp;Members
        </li>
      </ul>
    </li>
    <li className="card-detail-sidebar-list">
      <h3>Actions</h3>
      <ul className="card-detail-actions">
        <li className="button">
          <FontAwesomeIcon icon="trash-alt" 
            className="fa-icon"
          /> &nbsp;Delete
        </li>
      </ul>
    </li>
  </ul>
);

export default CardDetailSidebar;