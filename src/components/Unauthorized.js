import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div className='container'>
      <div class="message">
        <h1 className='text-center my-5'>403 - You Shall Not Pass</h1>
        <p>Please try again after login with Gmail<br />
        </p>
      </div>
      <p><Link to='/'>Back to Home</Link></p>
    </div>
  )
}

export default Unauthorized;