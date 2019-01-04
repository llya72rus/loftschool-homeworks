import React from 'react';
import Form from '../Form';

const data = {
  firstName: 'James',
  lastName: 'Bond',
  password: '007'
};

export default () => {
  return (
    <div className="app-container">
      <Form
        firstName={data.firstName}
        lastName={data.lastName}
        password={data.password}
      />
    </div>
  );
};
