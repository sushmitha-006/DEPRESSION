import React, { useState } from 'react';
import './GratitudePage.css';

const GratitudePage = () => {
  const [entries, setEntries] = useState([{ text: '', file: null }, { text: '', file: null }, { text: '', file: null }]);
  const [showModal, setShowModal] = useState(false);

  const handleTextChange = (index, e) => {
    const newEntries = [...entries];
    newEntries[index].text = e.target.value;
    setEntries(newEntries);
  };

  const handleFileChange = (index, e) => {
    const newEntries = [...entries];
    newEntries[index].file = e.target.files[0];
    setEntries(newEntries);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (entries.every(entry => entry.text || entry.file)) {
      setShowModal(true);
    } else {
      alert('Please fill out all three gratitude entries.');
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const renderMedia = (file) => {
    if (!file) return null;
    const fileURL = URL.createObjectURL(file);
    if (file.type.startsWith('image/')) {
      return <img src={fileURL} alt="user upload" className="media" />;
    } else if (file.type.startsWith('video/')) {
      return <video controls src={fileURL} className="media" />;
    } else if (file.type.startsWith('audio/')) {
      return <audio controls src={fileURL} className="media" />;
    } else {
      return null;
    }
  };

  return (
    <div className="gratitude-page">
      <h1>Gratitude Page</h1>
      <form onSubmit={handleSubmit} className="gratitude-form">
        {entries.map((entry, index) => (
          <div key={index} className="entry-container">
            <textarea
              value={entry.text}
              onChange={(e) => handleTextChange(index, e)}
              placeholder="What are you grateful for today?"
              required
            ></textarea>
            <input type="file" onChange={(e) => handleFileChange(index, e)} />
          </div>
        ))}
        <button type="submit">Post</button>
      </form>
      <div className="entries">
        {entries.map((entry, index) => (
          <div key={index} className="entry">
            <p>{entry.text}</p>
            {renderMedia(entry.file)}
          </div>
        ))}
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>Great job! Thank you for sharing your gratitude. Keep it up!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GratitudePage;
