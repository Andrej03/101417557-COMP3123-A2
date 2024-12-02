import React from "react";
import { Button } from "react";
const Logout = () => {
  const handleClick = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <Button type="primary" onClick={handleClick}>
      Logout
    </Button>
  );
};

export default Logout;
