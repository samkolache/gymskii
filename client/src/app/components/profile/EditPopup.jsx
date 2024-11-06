import React, { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import clsx from 'clsx';
import axios from 'axios';
import { useRouter } from 'next/compat/router';

const EditPopup = ({ isModalOpen, toggleModal }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [quote, setQuote] = useState('');
  const router = useRouter();
  const hardcodedID = '6722a5d542cfa6e5634e169e';

  useEffect(() => {
    axios.get(`http://localhost:5555/profile/${hardcodedID}`)
      .then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmailAddress(response.data.emailAddress);
        setPhoneNumber(response.data.phoneNumber);
        setQuote(response.data.quote);
      })
      .catch((error) => {
        alert('An error has occurred, please check console');
        console.log(error);
      });
  }, [hardcodedID]);

  const handleEditInfo = () => {
    const data = { firstName, lastName, emailAddress, phoneNumber, quote };
    axios.put(`http://localhost:5555/profile/${hardcodedID}`, data)
      .then(() => {
        router.push('/profile');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={clsx(
      'bg-gray-500 bg-opacity-50 fixed inset-0 flex items-center justify-center',
      { 'hidden': !isModalOpen }
    )}>
      <form className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full space-y-4' onSubmit={handleEditInfo}>
        {/* title and x */}
        <div className='flex justify-between'>
          <h3 className='text-lg font-semibold'>Edit Information</h3>
          <CloseIcon className="cursor-pointer" onClick={toggleModal} />
        </div>

        {/* Name */}
        <div className='flex justify-between space-x-4'>
          <div className="flex flex-col w-1/2">
            <label htmlFor='firstName' className='mb-1 text-sm text-gray-700'>First Name</label>
            <input
              id='firstName'
              type="text"
              className='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-1/2">
            <label htmlFor='lastName' className='mb-1 text-sm text-gray-700'>Last Name</label>
            <input
              id='lastName'
              type="text"
              className='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        {/* Email/Phone */}
        <div className='flex justify-between space-x-4'>
          <div className="flex flex-col w-1/2">
            <label htmlFor='email' className='mb-1 text-sm text-gray-700'>Email</label>
            <input
              id='email'
              type="email"
              className='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200'
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-1/2">
            <label htmlFor='phone' className='mb-1 text-sm text-gray-700'>Phone</label>
            <input
              id='phone'
              type="tel"
              className='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>

        {/* Quote */}
        <div className="flex flex-col">
          <label htmlFor='quote' className='mb-1 text-sm text-gray-700'>Quote</label>
          <textarea
            id='quote'
            rows="3"
            className='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200'
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPopup;
