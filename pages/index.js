// pages/index.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputForm from '../components/InputForm';
import ResponseDisplay from '../components/ResponseDisplay';

function Home() {
  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (response) {
      const filteredResponse = {};
      selectedOptions.forEach((option) => {
        if (option === 'Alphabets') {
          filteredResponse.alphabets = response.alphabets;
        } else if (option === 'Numbers') {
          filteredResponse.numbers = response.numbers;
        } else if (option === 'Highest lowercase alphabet') {
          filteredResponse.highest_lowercase_alphabet = response.highest_lowercase_alphabet;
        }
      });
      setResponse(filteredResponse);
    }
  }, [selectedOptions, response]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const jsonInput = JSON.parse(inputValue);
      const response = await axios.post('https://testbfhl.herokuapp.com/bfhl', jsonInput);
      setResponse(response.data);
      setError(null);
    } catch (error) {
      setError('Invalid JSON input');
    }
  };

  const handleSelectChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedOptions(selectedOptions);
  };

  return (
    <div>
      <InputForm
        inputValue={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onSubmit={handleSubmit}
        error={error}
      />
      {response && (
        <ResponseDisplay
          response={response}
          onSelectChange={handleSelectChange}
          selectedOptions={selectedOptions}
        />
      )}
    </div>
  );
}

export default Home;