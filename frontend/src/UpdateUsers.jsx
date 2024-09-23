
// import React, { useState } from 'react';

// function UpdateUsers({ addUser }) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [age, setAge] = useState('');
//   const [role, setRole] = useState('User'); // Default role

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newUser = { Name: name, Email: email, Age: age, Role: role };
//     addUser(newUser); // Pass the new user data back to the parent component
//   };

//   return (
//     <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//       <div className="w-50 bg-white rounded p-3">
//         <form onSubmit={handleSubmit}>
//           <h2>Update User</h2>
//           <div className="mb-2">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               placeholder="Enter Name"
//               className="form-control"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className="mb-2">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               placeholder="Enter Email"
//               className="form-control"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="mb-2">
//             <label htmlFor="age">Age</label>
//             <input
//               type="text"
//               placeholder="Enter Age"
//               className="form-control"
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//             />
//           </div>
//           <div className="mb-2">
//             <label htmlFor="role">Role</label>
//             <select
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               className="form-control"
//             >
//               <option value="User">User</option>
//               <option value="Admin">Admin</option>
//             </select>
//           </div>
//           <button className="btn btn-success" type="submit">Update</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default UpdateUsers;

import React, { useState, useEffect } from 'react';

function UpdateUser({ userToEdit, updateUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [role, setRole] = useState('User');

  // Pre-fill form with existing user data
  useEffect(() => {
    if (userToEdit) {
      setName(userToEdit.Name);
      setEmail(userToEdit.Email);
      setAge(userToEdit.Age);
      setRole(userToEdit.Role);
    }
  }, [userToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { Name: name, Email: email, Age: age, Role: role };
    updateUser(updatedUser); // Pass the updated user data back to the parent component
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Edit User</h2>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              value={email}
              disabled // Email is the unique identifier, so it cannot be changed
            />
          </div>
          <div className="mb-2">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              placeholder="Enter Age"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="role">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="form-control"
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <button className="btn btn-success" type="submit">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;

