import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    workCriteria: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const newFormData = {
      username: formData.username,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      workCriteria: formData.workCriteria,
    };
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
  };

  const validate = () => {
    let errors = {};

   
    const stringRegex = /^[a-zA-Z]+$/;

    
    if (!formData.username) {
      errors.username = "Username is required";
    } else if (formData.username.length < 8 || formData.username.length > 16) {
      errors.username = "Username must be between 8 and 16 characters";
    } else if (!stringRegex.test(formData.username)) {
      errors.username = "Username must contain only letters";
    }

    
    if (!formData.firstName) {
      errors.firstName = "First name is required";
    } else if (formData.firstName.length < 8 || formData.firstName.length > 16) {
      errors.firstName = "First name must be between 8 and 16 characters";
    } else if (!stringRegex.test(formData.firstName)) {
      errors.firstName = "First name must contain only letters";
    }

    
    if (!formData.lastName) {
      errors.lastName = "Last name is required";
    } else if (formData.lastName.length < 8 || formData.lastName.length > 16) {
      errors.lastName = "Last name must be between 8 and 16 characters";
    } else if (!stringRegex.test(formData.lastName)) {
      errors.lastName = "Last name must contain only letters";
    }

    
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!formData.email.endsWith("@gmail.com")) {
      errors.email = "Email must end with @gmail.com";
    }

    
    if (!formData.workCriteria) {
      errors.workCriteria = "Work criteria is required";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    navigate('/success');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Username:</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">First Name:</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name:</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Work Criteria:</label>
            <input type="text" name="workCriteria" value={formData.workCriteria} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
            {errors.workCriteria && <p className="text-red-500 text-sm">{errors.workCriteria}</p>}
          </div>
          <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
            {loading ? 'Loading...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
