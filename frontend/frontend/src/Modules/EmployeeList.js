import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('/api/employees', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/employees/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setEmployees(employees.filter((employee) => employee.id !== id));
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <div>
      <h1>Employee List</h1>
      <Link to="/add-employee">Add Employee</Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.first_name}</td>
              <td>{employee.last_name}</td>
              <td>
                <Link to={`/employees/${employee.id}`}>View</Link>
                <Link to={`/edit-employee/${employee.id}`}>Edit</Link>
                <button onClick={() => handleDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
