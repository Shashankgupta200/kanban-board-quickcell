import React from 'react';
import './Ticket.css';

function Ticket({ id, title, userId, tags, priority }) {
  return (
    <div className="ticket">
      <div className="ticket-id">{id}</div> {/* Display the ID */}
      <div className="ticket-user-id">Assigned to: {userId}</div>
      <h3 className="ticket-title">{title}</h3>
      <div className="ticket-priority">Priority: {priority}</div>
      <div className="ticket-tags">
        {tags.map((tag, index) => (
          <span key={index} className="ticket-tag">{tag}</span>
        ))}
      </div>
      {/* Add an expand button if needed */}
    </div>
  );
}

export default Ticket;
