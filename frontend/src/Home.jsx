


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Home({ setIsLoggedIn, userEmail }) {
//   const navigate = useNavigate();

//   // State for user information
//   const [dateOfBirth, setDateOfBirth] = useState('');
//   const [address, setAddress] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');

//   // Logout function
//   const handleLogout = () => {
//     axios.get('http://localhost:3001/logout', { withCredentials: true })
//       .then(response => {
//         console.log(response.data.status); // Show logout success message
//         if (response.data.status === "Logout successful") {
//           setIsLoggedIn(false);  // Update state to reflect logged out status
//           navigate('/login');    // Redirect to login page
//         }
//       })
//       .catch(error => console.error("Logout error:", error));
//   };

//   // Handle profile update submission
//   const handleProfileUpdate = (e) => {
//     e.preventDefault();

//     axios.post('http://localhost:3001/updateProfile', {
//       email: userEmail, // Use dynamic email from props
//       dateOfBirth,
//       address,
//       phoneNumber,
//     })
//       .then(response => {
//         console.log(response.data); // Show success message or handle response
//       })
//       .catch(error => console.error('Error updating profile:', error));
//   };

//   return (
//     <div>
//       <h2>Home</h2>
//       <button onClick={handleLogout}>Logout</button>

//       {/* Profile update form */}
//       <div>
//         <h3>Update Profile</h3>
//         <form onSubmit={handleProfileUpdate}>
//           <div>
//             <label>Date of Birth:</label>
//             <input
//               type="date"
//               value={dateOfBirth}
//               onChange={(e) => setDateOfBirth(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label>Address:</label>
//             <input
//               type="text"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label>Phone Number:</label>
//             <input
//               type="text"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Update Profile</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Home;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home({ setIsLoggedIn, userEmail }) {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [position, setPosition] = useState('');
  const [message, setMessage] = useState(''); // State for success message

  const handleLogout = () => {
    axios.get('http://localhost:3001/logout', { withCredentials: true })
      .then(response => {
        if (response.data.status === "Logout successful") {
          setIsLoggedIn(false);
          navigate('/login');
        }
      })
      .catch(error => console.error("Logout error:", error));
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/updateProfile', {
      fullName,
      email: userEmail,
      dateOfBirth,
      address,
      phoneNumber,
      department,
      position,
    })
      .then(response => {
        console.log(response.data);setFullName('');
        setDateOfBirth('');
        setAddress('');
        setPhoneNumber('');
        setDepartment('');
        setPosition('');
        setMessage('Profile updated successfully!'); // Set success message
      })
      .catch(error => console.error('Error updating profile:', error));
      setMessage('Error updating profile.'); // Handle error message
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Update Profile</h2>
      

      <div style={styles.formContainer}>
      
        <form onSubmit={handleProfileUpdate}>
        <div style={styles.inputGroup}>
            <label>Full Name:</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label>Date of Birth:</label>
            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label>Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label>Phone Number:</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label>Department:</label>
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label>Position:</label>
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.submitButton}>Update Profile</button>
        </form>
        {message && <p style={styles.message}>{message}</p>} {'Profile updated'}
      </div>
      <button style={styles.button} onClick={handleLogout}>Logout</button>
    </div>
  );
}

const styles = {

  container: {
    padding: '20px',
    maxWidth: '500px',
    margin: 'auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
  },
  button: {
    margin: '10px 0',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
  },
  formContainer: {
    marginTop: '20px',
  },
  subtitle: {
    marginBottom: '10px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '2px',
    border: '1px solid #ccc',
  },
  submitButton: {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#28A745',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default Home;
