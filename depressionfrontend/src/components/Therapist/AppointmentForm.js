import React, { useState } from 'react';
import './AppointmentForm.css';

const AppointmentForm = ({ therapist, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    slot: '',
  });
  const [formError, setFormError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.slot) {
      onSubmit(formData);
      setFormData({
        name: '',
        email: '',
        phone: '',
        slot: '',
      });
      setFormError('');
    } else {
      setFormError('Please fill in all fields.');
    }
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <h2>Book an Appointment with {therapist.name}</h2>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
      </label>
      <label>
        Phone:
        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
      </label>
      <label>
        Preferred Slot:
        <input type="text" name="slot" value={formData.slot} onChange={handleInputChange} required />
      </label>
      {formError && <div className="error-message">{formError}</div>}
      <input type="submit" value="Submit" />
    </form>
  );
};

export default AppointmentForm;
