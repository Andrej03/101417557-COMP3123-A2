import React from "react";
import axios from "axios";
import { useState } from "react";

const AddEmployee = () => {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/employees', {
                first_name: e.target.first_name.value,
                last_name: e.target.last_name.value
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
          <h1>Add Employee</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              required
            />
            <button type="submit">Add Employee</button>
          </form>
        </div>
      );
    };

export default AddEmployee;
