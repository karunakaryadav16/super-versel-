// Close.jsx
import React, { useState } from 'react';
import axios from 'axios';
import "./comp.css"

const Close = () => {
  const [sentence, setSentence] = useState('');
  const [selectedWords, setSelectedWords] = useState([]);

  const handleSentenceChange = (e) => {
    setSentence(e.target.value);
  };

  const handleMouseUp = () => {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();

    if (selectedText !== '') {
      setSelectedWords((prevSelectedWords) => [...prevSelectedWords, selectedText]);
      // Clear the selection to avoid interfering with future selections
      selection.removeAllRanges();
    }
  };

  const saveData = async () => {
    try {
      alert("Data is saved successfully")

      await axios.post('https://super-backend-atta.onrender.com/api/close', { sentence, selectedWords });
      console.log('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div>
      <h4>Create a Cloze Question</h4>
      <input
        style={{ width: '70%', height: "50px" }}
        type="text"
        placeholder="Type the sentence with underscores (_) for blanks..."
        value={sentence}
        onChange={handleSentenceChange}
        onMouseUp={handleMouseUp}
      />
      {selectedWords.length > 0 && (
        <div>
          <h5>Selected Words:</h5>
          {selectedWords.map((word, index) => (
            <div key={index}>
              <label>
                <input type="checkbox" checked={true} />
                {word}
              </label>
            </div>
          ))}
        </div>
      )}

      <button className='save' onClick={saveData}>Save</button>
    </div>
  );
};

export default Close;
