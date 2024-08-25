// components/ResponseDisplay.js
import React from 'react';

function ResponseDisplay({ response, onSelectChange, selectedOptions }) {
  return (
    <div>
      <select multiple value={selectedOptions} onChange={onSelectChange}>
        <option value="Alphabets">Alphabets</option>
        <option value="Numbers">Numbers</option>
        <option value="Highest lowercase alphabet">Highest lowercase alphabet</option>
      </select>
      <ul>
        {Object.keys(response).map((key) => (
          <li key={key}>
            <strong>{key}:</strong> {JSON.stringify(response[key])}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResponseDisplay;