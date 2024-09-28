import React from 'react';
import './TherapistList.css';

const therapists = [
  {
    id: 1,
    name: 'Dr. John Doe',
    specialization: 'Psychologist',
    photoUrl: 'https://th.bing.com/th/id/OIP.PBPYVES_vO2MW-UMqpAXQgHaHa?rs=1&pid=ImgDetMain',
  },
  {
    id: 2,
    name: 'Dr. Jane Smith',
    specialization: 'Family Counselor',
    photoUrl: 'https://th.bing.com/th/id/OIP.CIVVdUpoRJB2Lbp4T_W8WgHaKX?w=1200&h=1679&rs=1&pid=ImgDetMain',
  },
  {
    id: 3,
    name: 'Dr. Akshaya',
    specialization: 'Mental Health Counselor',
    photoUrl: 'https://th.bing.com/th/id/OIP.oJiutIzIfknIFF1wN36T6gHaL4?w=866&h=1390&rs=1&pid=ImgDetMain',
  },
  {
    id: 4,
    name: 'Dr. Shruthi Agarwal',
    specialization: 'Anxiety Counselor',
    photoUrl: 'https://thumbs.dreamstime.com/b/doctor-indian-38175884.jpg',
  
  },
  {
    id: 5,
    name: 'Dr. Ashok Kumar',
    specialization: 'Fear Counselor',
    photoUrl: 'https://thumbs.dreamstime.com/b/south-indian-doctor-smiling-portrait-36256096.jpg',
  
  },
  {
    id: 6,
    name: 'Dr.Preeti Singh',
    specialization: 'Detox & Relax Therapist',
    photoUrl: 'https://img.freepik.com/premium-photo/indian-female-doctor-portrait-south-indian-young-lady-doctor-holding-stethoscope-hand_527904-1841.jpg?w=996',
  
  }
  // Add more therapists as needed
];

const TherapistList = ({ handleBookAppointment }) => {
  return (
    <div className="therapist-list">
      {therapists.map(therapist => (
        <div key={therapist.id} className="therapist-card">
          <img src={therapist.photoUrl} alt={therapist.name} />
          <h3>{therapist.name}</h3>
          <p>{therapist.specialization}</p>
          <button onClick={() => handleBookAppointment(therapist)}>Book an Appointment</button>
        </div>
      ))}
    </div>
  );
};

export default TherapistList;
