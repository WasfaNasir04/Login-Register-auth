
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

import React, {useEffect, useState}from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function UpdateUser() {

  const {id} = useParams()
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const [role, setRole] = useState('User'); 
  const navigate = useNavigate();

  // Pre-fill form with existing user data
  useEffect(() => {
    axios.get('http://localhost:3001/getUser/'+id)
    .then(result => {console.log(result)
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)
      setRole(result.data.role)
    })
        .catch(err => console.log(err));
}, [])

const Update = (e) => {
  e.preventDefault();
    axios.put("http://localhost:3001/updateuser/"+id, {name,email,age,role})
    .then(result => {
        console.log(result)
        navigate('/users')
    })
    .catch(err => console.log(err))
}

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Update}>
          <h2>Edit User</h2>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value = {name}
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
              onChange={(e) => setEmail(e.target.value)}
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
              className="form-control"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <button className="btn btn-success" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;

