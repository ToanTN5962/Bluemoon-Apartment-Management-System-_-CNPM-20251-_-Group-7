import React, { useState } from 'react';
import backgroundImage from '../assets/images/updateInfor-bg.jpg';

export default function UpdateInfoPage() {
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber1: '',
    identityNumber: '',
    phoneNumber2: '',
    roomNumber: '',
    familyRole: 'owner'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thông tin đã được gửi!');
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)'
      }}
    >
      <div 
        className="w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="backdrop-blur-sm bg-white/80 p-8 md:p-12">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="text-4xl">🏢</div>
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600">Bluemoon</h1>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-blue-600 text-center mb-10">
            Information Update Form
          </h2>

          {/* Form */}
          <div className="space-y-5">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <label className="md:w-48 text-blue-900 font-semibold text-lg">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Please enter your name"
                className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-blue-500 focus:outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <label className="md:w-48 text-blue-900 font-semibold text-lg">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Please enter your email"
                className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-blue-500 focus:outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <label className="md:w-48 text-blue-900 font-semibold text-lg">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber1"
                value={formData.phoneNumber1}
                onChange={handleChange}
                placeholder="************"
                className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-blue-500 focus:outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <label className="md:w-48 text-blue-900 font-semibold text-lg">
                Identity Number
              </label>
              <input
                type="text"
                name="identityNumber"
                value={formData.identityNumber}
                onChange={handleChange}
                placeholder="************"
                className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-blue-500 focus:outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <label className="md:w-48 text-blue-900 font-semibold text-lg">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber2"
                value={formData.phoneNumber2}
                onChange={handleChange}
                placeholder="************"
                className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-blue-500 focus:outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <label className="md:w-48 text-blue-900 font-semibold text-lg">
                Room Number
              </label>
              <input
                type="text"
                name="roomNumber"
                value={formData.roomNumber}
                onChange={handleChange}
                placeholder="************"
                className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-blue-500 focus:outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <label className="md:w-48 text-blue-900 font-semibold text-lg">
                Family Role
              </label>
              <select
                name="familyRole"
                value={formData.familyRole}
                onChange={handleChange}
                className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-blue-500 focus:outline-none text-gray-700 bg-white"
              >
                <option value="owner">Owner</option>
                <option value="member">Member</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                onClick={handleSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl px-16 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}