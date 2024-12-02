import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SearchEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [searchId, setSearchId] = useState('');
  const [filteredEmployee, setFilteredEmployee] = useState(null);

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

  const handleSearch = () => {
    const employee = employees.find(emp => emp.id === searchId);
    setFilteredEmployee(employee || null);
  };

  return (
    <div>
      <h1>Employee List</h1>
      <div>
        <input
          type="text"
          placeholder="Search by ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {filteredEmployee ? (
        <div>
          <h2>Employee Details</h2>
          <p>ID: {filteredEmployee.id}</p>
          <p>First Name: {filteredEmployee.first_name}</p>
          <p>Last Name: {filteredEmployee.last_name}</p>
        </div>
      ) : (
        <ul>
          {employees.map((employee) => (
            <li key={employee.id}>
              {employee.first_name} - {employee.last_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchEmployee;
