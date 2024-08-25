// components/InputForm.js
import React from 'react';

function InputForm({ inputValue, onChange, onSubmit, error }) {
  return (
    <form onSubmit={onSubmit}>
      <textarea value={inputValue} onChange={onChange} />
      <button type="submit">Submit</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
}

export default InputForm;