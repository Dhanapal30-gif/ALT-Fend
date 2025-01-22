import React, { useState } from 'react';
import './CreateAccount.css';
import TextField from '@mui/material/TextField';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    UserId: '',
    Password: '',
  });

  const [formErrors, setFormErrors] = useState({
    UserId: '',
    Password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let isValid = true;
    const errors = {};

    if (!formData.UserId) {
      errors.UserId = 'Please fill UserId';
      isValid = false;
    }

    if (!formData.Password) {
      errors.Password = 'Please fill Password';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    if (validate()) {
      alert("Form is valid!"); // Placeholder for actual submit logic
    }
  };

  return (
    <div className="forgotPasswordBackgroun">
      <div className="forgotForm">
        <p>ForgotPassword</p>
        <form onSubmit={handleSubmit}>
          <TextField
            label="UserId"
            name="UserId"
            variant="standard"
            fullWidth
            multiline
            rows={1}
            value={formData.UserId || ''}
            style={{
              width: '210px',
              marginLeft: '22px',
              marginTop: '20px',
            }}
            onChange={handleChange}
            error={Boolean(formErrors.UserId)}
            helperText={formErrors.UserId}
          />
          <TextField
            label="Password"
            name="Password"
            type="password"
            variant="standard"
            fullWidth
            multiline
            rows={1}
            value={formData.Password || ''}
            style={{
              width: '210px',
              marginLeft: '22px',
              marginTop: '20px',
            }}
            onChange={handleChange}
            error={Boolean(formErrors.Password)}
            helperText={formErrors.Password}
          />
          <button
            type="submit"
            style={{
              width: '250px',
              height: '50px',
              backgroundColor: '#4B4BAF',
              color: 'white',
              border: 'none',
              borderRadius: '25px',
              marginTop: '20px',
              fontSize: '16px',
            }}
          >
            Login
          </button>
        </form>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '20px',
            width: '250px',
          }}
        >
          <a
            href="/"
            style={{
              fontSize: '14px',
              textDecoration: 'none',
              color: '#6c757d',
            }}
          >
            Back to Login?
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
