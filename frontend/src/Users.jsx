// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';

// function Users() {
//   const [users, setUsers] = useState([
//     { Name: 'Wasfa', Email: 'wasfa@gmail.com', Age: 20, Role: 'User' },
//   ]);

//   // Function to handle role change
//   const handleRoleChange = (index, newRole) => {
//     const updatedUsers = users.map((user, i) => {
//       if (i === index) {
//         return { ...user, Role: newRole };
//       }
//       return user;
//     });
//     setUsers(updatedUsers);
//   };

//   return (
//     <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//       <div className="w-50 bg-white rounded p-3">
//         <Link to="/createuser" className='btn btn-success'>Add +</Link>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Age</th>
//               <th>Employee Role</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr key={index}>
//                 <td>{user.Name}</td>
//                 <td>{user.Email}</td>
//                 <td>{user.Age}</td>
//                 <td>
//                   <select
//                     value={user.Role}
//                     onChange={(e) => handleRoleChange(index, e.target.value)}
//                     className="form-select"
//                   >
//                     <option value="User">User</option>
//                     <option value="Admin">Admin</option>
//                   </select>
//                 </td>
//                 <td>
//                   <button className="btn btn-warning me-2">Edit</button>
//                   <button className="btn btn-danger">Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Users;


// import React, { useState } from 'react';
// import { Link, Route, Routes, useNavigate } from 'react-router-dom';
// import CreateUsers from './CreateUsers';
// import UpdateUsers from './UpdateUsers';

// function Users() {
//   const [users, setUsers] = useState([
//     { Name: 'Wasfa', Email: 'wasfa@gmail.com', Age: 20, Role: 'User' },
//   ]);

//   const navigate = useNavigate();

//   // Function to add a new user
//   const addUser = (newUser) => {
//     setUsers([...users, newUser]);
//     navigate('/'); // Navigate back to the users list after user is added
//   };

//   return (
//     <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//       <div className="w-50 bg-white rounded p-3">
//         <Routes>
//           <Route path="/createuser" element={<CreateUsers addUser={addUser} />} />
//           <Route path="/"element={
//               <>
//                 <Link to="/createuser" className="btn btn-success mb-3">Add +</Link>
//                 <table className="table">
//                   <thead>
//                     <tr>
//                       <th>Name</th>
//                       <th>Email</th>
//                       <th>Age</th>
//                       <th>Role</th>
//                       <th>Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {users.map((user, index) => (
//                       <tr key={index}>
//                         <td>{user.Name}</td>
//                         <td>{user.Email}</td>
//                         <td>{user.Age}</td>
//                         <td>{user.Role}</td> {/* Just display the role */}
//                         <td>
//                         <Link to="/updateuser" className="btn btn-success mb-3">Update</Link>
//                           <button className="btn btn-danger">Delete</button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </>
//             }
//           />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default Users;

import React, { useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import CreateUsers from './CreateUsers';
import UpdateUsers from './UpdateUsers'; // Import the UpdateUser component

function Users() {
  const [users, setUsers] = useState([
    { Name: 'Wasfa', Email: 'wasfa@gmail.com', Age: 20, Role: 'User' },
  ]);

  const [userToEdit, setUserToEdit] = useState(null); // Track the user being edited
  const navigate = useNavigate();

  // Function to add a new user
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
    navigate('/'); // Navigate back to the users list after user is added
  };

  // Function to update an existing user
  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.Email === updatedUser.Email ? updatedUser : user))
    );
    setUserToEdit(null); // Clear the user to edit after updating
    navigate('/'); // Navigate back to the users list
  };

  // Function to delete a user
  const deleteUser = (email) => {
    setUsers(users.filter((user) => user.Email !== email));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Routes>
          {/* Route for creating a new user */}
          <Route path="/createuser" element={<CreateUsers addUser={addUser} />} />

          {/* Route for updating a user */}
          <Route
            path="/updateuser"
            element={<UpdateUsers userToEdit={userToEdit} updateUser={updateUser} />}
          />

          {/* Main users list */}
          <Route
            path="/"
            element={
              <>
                <Link to="/createuser" className="btn btn-success mb-3">
                  Add +
                </Link>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Age</th>
                      <th>Role</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={index}>
                        <td>{user.Name}</td>
                        <td>{user.Email}</td>
                        <td>{user.Age}</td>
                        <td>{user.Role}</td>
                        <td>
                          <button
                            className="btn btn-warning me-2"
                            onClick={() => {
                              setUserToEdit(user); // Set the selected user to edit
                              navigate('/updateuser'); // Navigate to update form
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteUser(user.Email)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default Users;
