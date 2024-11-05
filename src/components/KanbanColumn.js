import React from 'react';
import Ticket from './Ticket';
import './KanbanColumn.css';

function KanbanColumn({ title, tickets, users }) {
  return (
    <div className="kanban-column">
      <h2>{title}</h2>
      <div className="ticket-list">
        {tickets.map(ticket => (
          <Ticket
            key={ticket.id}
            id={ticket.id}
            title={ticket.title}
            userId={ticket.userId}
            tags={ticket.tag}
            priority={ticket.priority}
          />
        ))}
      </div>
    </div>
  );
}

export default KanbanColumn;
