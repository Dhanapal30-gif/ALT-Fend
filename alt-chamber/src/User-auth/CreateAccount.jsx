import React, { useState } from 'react';
import './CreateAccount.css'
import { TextField, MenuItem, InputAdornment } from '@mui/material';
import { AccountCircle, Email, Phone, Lock, VerifiedUser } from '@mui/icons-material';

const CreateAccount = () => {
    const [formData, setFormData] = useState({
        UserName: '',
        UserId: '',
        Email: '',
        MobileNumber: '',
        Password: '',
        Status: ''
    });

    const [formErrors, setFormErrors] = useState({
        UserName: '',
        UserId: '',
        Email: '',
        MobileNumber: '',
        Password: '',
        Status: ''
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
    
        if (!formData.UserName) {
            errors.UserName = 'Please fill UserName';
            isValid = false;
          }
        if (!formData.UserId) {
          errors.UserId = 'Please fill UserId';
          isValid = false;
        }
        if (!formData.Email) {
            errors.Email = 'Please fill Email';
            isValid = false;
          }
          if (!formData.MobileNumber) {
            errors.MobileNumber = 'Please fill MobileNumber';
            isValid = false;
          }
          if (!formData.Status) {
            errors.Status = 'Please fill Status';
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
        <div className="Altcontainer">
            <div className="Form">
                <p style={{}}>Welcome to create acount</p>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="UserName"
                        name="UserName"
                        variant="standard"
                        fullWidth
                        multiline
                        rows={1}
                        value={formData.UserName || ''}
                        style={{
                            width: '270px',
                            marginLeft: '22px',
                            marginTop: '20px',
                        }}
                        onChange={handleChange}
                        error={Boolean(formErrors.UserName)}
                        helperText={formErrors.UserName}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        label="UserId"
                        name="UserId"
                        variant="standard"
                        fullWidth
                        multiline
                        rows={1}
                        value={formData.UserId || ''}
                        style={{
                            width: '270px',
                            marginLeft: '22px',
                            marginTop: '20px',
                        }}
                        onChange={handleChange}
                        error={Boolean(formErrors.UserId)}
                        helperText={formErrors.UserId}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <VerifiedUser />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        label="Email"
                        name="Email"
                        variant="standard"
                        fullWidth
                        multiline
                        rows={1}
                        value={formData.Email || ''}
                        style={{
                            width: '270px',
                            marginLeft: '22px',
                            marginTop: '20px',
                        }}
                        onChange={handleChange}
                        error={Boolean(formErrors.Email)}
                        helperText={formErrors.Email}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Email />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        label="Mobile Number"
                        name="MobileNumber"
                        type="text" // Use "text" instead of "number" to control validation manually
                        variant="standard"
                        fullWidth
                        value={formData.MobileNumber || ''}
                        style={{
                            width: '270px',
                            marginLeft: '22px',
                            marginTop: '20px',
                        }}
                        onChange={(e) => {
                            const value = e.target.value;
                            // Allow only digits and ensure a maximum of 10 characters
                            if (/^\d{0,10}$/.test(value)) {
                                setFormData({
                                    ...formData,
                                    MobileNumber: value,
                                });
                            }
                        }}
                        error={Boolean(formErrors.MobileNumber)}
                        helperText={formErrors.MobileNumber || 'Enter a 10-digit mobile number'}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Phone />
                                </InputAdornment>
                            ),
                        }}
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
                            width: '270px',
                            marginLeft: '22px',
                            marginTop: '20px',
                        }}
                        onChange={handleChange}
                        error={Boolean(formErrors.Password)}
                        helperText={formErrors.Password}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        label="Status"
                        name="Status"
                        select
                        variant="standard"
                        fullWidth
                        value={formData.Status || ''}
                        style={{
                            width: '270px',
                            marginLeft: '22px',
                            marginTop: '20px',
                        }}
                        onChange={handleChange}
                        error={Boolean(formErrors.Status)}
                        helperText={formErrors.Status}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <VerifiedUser />
                                </InputAdornment>
                            ),
                        }}
                    >
                        <MenuItem value="active">Active</MenuItem>
                        <MenuItem value="inactive">Inactive</MenuItem>
                    </TextField>
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
                        Create
                    </button>
                </form>
            </div>

        </div>
    )
}

export default CreateAccount