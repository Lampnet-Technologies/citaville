import React, { useState } from 'react';
import CongratsPopup from './CongratsPopup';

const Register = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: ''
  });
  const [showCongrats, setShowCongrats] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setShowCongrats(true);
  };

  return (
    <>
      <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
        <div className="bg-gray-900 text-white p-6 rounded-xl shadow-2xl w-full max-w-xl relative border border-green-500">
          <button
            className="absolute top-2 right-3 text-white hover:text-green-500 text-2xl font-bold"
            onClick={onClose}
          >
            &times;
          </button>

          <h2 className="text-2xl font-bold mb-6 text-center text-green-400">Register</h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="bg-transparent border border-white text-white p-2 rounded col-span-1 placeholder-white focus:outline-none focus:border-green-400"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="bg-transparent border border-white text-white p-2 rounded col-span-1 placeholder-white focus:outline-none focus:border-green-400"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="bg-transparent border border-white text-white p-2 rounded col-span-1 placeholder-white focus:outline-none focus:border-green-400"
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="bg-transparent border border-white text-white p-2 rounded col-span-1 placeholder-white focus:outline-none focus:border-green-400"
              onChange={handleChange}
              required
            />
            <select
              name="course"
              className="bg-gray-800 text-white border border-white p-2 rounded col-span-2 focus:outline-none focus:border-green-400"
              onChange={handleChange}
              required
            >
              <option value="">Select Course</option>
              <option value="Web Development">Web Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Data Science">Data Science</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Product Design">Product Design</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Hardware Engineering">Hardware Engineering</option>
              <option value="Mobile App Development">Mobile App Dev</option>
              <option value="Network Administration">Network Admin</option>
              <option value="Machine Learning">Machine Learning</option>
            </select>
            <button
              type="submit"
              className="col-span-2 bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold transition"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>

      {showCongrats && (
        <CongratsPopup
          type="registration"
          course={formData.course}
          onClose={() => {
            setShowCongrats(false);
            onClose();
          }}
        />
      )}
    </>
  );
};

export default Register;
