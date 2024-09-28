import React, { useState } from 'react';
import TherapistList from './TherapistList';
import AppointmentForm from './AppointmentForm'

function Therapist() {
  const [showForm, setShowForm] = useState(false);
  const [selectedTherapist, setSelectedTherapist] = useState(null);

  const handleBookAppointment = (therapist) => {
    setSelectedTherapist(therapist);
    setShowForm(true);
  };

  const handleFormSubmit = (formData) => {
    console.log('Form submitted with data:', formData);
    // Implement logic to handle form submission (e.g., API call)
    setShowForm(false);
  };

  return (
    <div className="App">
      <h1 style={{ color: 'black' }}>Find a Therapist</h1>
      <TherapistList handleBookAppointment={handleBookAppointment} />
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowForm(false)}>&times;</span>
            <AppointmentForm therapist={selectedTherapist} onSubmit={handleFormSubmit} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Therapist;