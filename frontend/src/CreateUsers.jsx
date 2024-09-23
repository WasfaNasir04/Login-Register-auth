// import React from 'react';

// function CreateUsers(){
//         return (
//             <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//               <div className="w-50 bg-white rounded p-3">
//                 <form>
//                   <h2>Add User</h2>
//                   <div className="mb-2">
//                     <label htmlFor="">Name</label>
//                     <input type="text" placeholder="Enter Name" className="form-control" />
//                   </div>
//                   <div className="mb-2">
//                     <label htmlFor="">Email</label>
//                     <input type="email" placeholder="Enter Email" className="form-control" />
//                   </div>
//                   <div className="mb-2">
//                     <label htmlFor="">Age</label>
//                     <input type="text" placeholder="Enter Age" className="form-control" />
//                   </div>
//                   <div className="mb-2">
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
//                   <button className="btn btn-success">Submit</button>
//                 </form>
//               </div>
//             </div>
//           );
// }

// export default CreateUsers;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateUsers() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();
  //const [role, setRole] = useState('User'); // Default role

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/createuser", {name,email,age})
    .then(result => {
        console.log(result)
        navigate('/users')
    })
    .catch(err => console.log(err))
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add User</h2>
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
          {/* <div className="mb-2">
            <label htmlFor="role">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="form-control"
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div> */}
          <button className="btn btn-success" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateUsers;
  

