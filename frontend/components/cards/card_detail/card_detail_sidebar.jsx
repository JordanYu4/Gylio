import React from 'react';

const CardDetailSidebar = () => (
  <ul className="card-detail-sidebar">
    <li className="card-detail-sidebar-list">
      <h3>Add to Card</h3>
      <ul className="card-detail-properties">
        <li className="button">Members</li>
      </ul>
    </li>
    <li className="card-detail-sidebar-list">
      <h3>Actions</h3>
      <ul className="card-detail-actions">
        <li className="button">Delete</li>
      </ul>
    </li>
  </ul>
);

export default CardDetailSidebar;