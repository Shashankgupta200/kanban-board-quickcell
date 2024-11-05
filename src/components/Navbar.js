import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [selectedOption, setSelectedOption] = useState('Priority');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(`Selected option: ${event.target.value}`);
  };

  return (
    <div className="navbar">
      <h1 className="navbar-title">Kanban Board</h1>

      <div className="navbar-dropdown">
        <label htmlFor="sort-options">Sort by: </label>
        <select id="sort-options" value={selectedOption} onChange={handleOptionChange}>
          <option value="Status">Status</option>
          <option value="User">User"Didnt get much time to code this"</option>
        </select>
      </div>
    </div>
  );
}

export default Navbar;
