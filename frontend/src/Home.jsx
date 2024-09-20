// import React from 'react';

// function Home(){
//     return(
//         <h2>Home</h2>
//     )
// }

// export default Home;

// import React from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Home({ setIsLoggedIn }) {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     axios.post('http://localhost:3001/logout', {}, { withCredentials: true })
//       .then(response => {
//         if (response.data.status === "Logout successful") {
//           setIsLoggedIn(false);
//           navigate('/login');
//         }
//       })
//       .catch(err => console.log(err));
//   };

//   return (
//     <div>
//       <h2>Home</h2>
//       <button onClick={handleLogout} className="btn btn-danger">
//         Logout
//       </button>
//     </div>
//   );
// }

// export default Home;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home({ setIsLoggedIn }) {
  const navigate = useNavigate();

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

  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
