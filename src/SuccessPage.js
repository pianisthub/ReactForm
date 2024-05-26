
import React, { useState, useEffect } from 'react';

const SuccessPage = () => {
  const [message, setMessage] = useState('');
  const [dogImage, setDogImage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleDog = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        
        const data = await response.json();
        setDogImage(data.message);
      } catch (error) {
        setMessage(error.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    handleDog();
  }, []); 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-6">Logged In Successfully</h2>
        <h2 className="text-2xl font-bold mb-6">Here Is A Random Image Of A Dog</h2>
        {loading ? (
          <p className="text-blue-600">Loading...</p>
        ) : (
          <>
            {message && <p className="text-red-500">{message}</p>}
            {dogImage && <img src={dogImage} alt="Random Dog" className="w-full rounded-md" />}
          </>
        )}
      </div>
    </div>
  );
};

export default SuccessPage;
