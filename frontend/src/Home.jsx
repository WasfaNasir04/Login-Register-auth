

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Home({ setIsLoggedIn }) {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     axios.get('http://localhost:3001/logout', { withCredentials: true })
//     .then(response => {
//         console.log(response.data.status); // Show logout success message
//         if (response.data.status === "Logout successful") {
//           setIsLoggedIn(false);  // Update state to reflect logged out status
//           navigate('/login');    // Redirect to login page
//         }
//       })
//       .catch(error => console.error("Logout error:", error));
//   };

//   return (
//     <div>
//       <h2>Home</h2>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// }

// export default Home;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home({ setIsLoggedIn, userEmail }) {
  const navigate = useNavigate();

  // State for user information
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Logout function
  const handleLogout = () => {
    axios.get('http://localhost:3001/logout', { withCredentials: true })
      .then(response => {
        console.log(response.data.status); // Show logout success message
        if (response.data.status === "Logout successful") {
          setIsLoggedIn(false);  // Update state to reflect logged out status
          navigate('/login');    // Redirect to login page
        }
      })
      .catch(error => console.error("Logout error:", error));
  };

  // Handle profile update submission
  const handleProfileUpdate = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/updateProfile', {
      email: userEmail, // Use dynamic email from props
      dateOfBirth,
      address,
      phoneNumber,
    })
      .then(response => {
        console.log(response.data); // Show success message or handle response
      })
      .catch(error => console.error('Error updating profile:', error));
  };

  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleLogout}>Logout</button>

      {/* Profile update form */}
      <div>
        <h3>Update Profile</h3>
        <form onSubmit={handleProfileUpdate}>
          <div>
            <label>Date of Birth:</label>
            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <button type="submit">Update Profile</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
