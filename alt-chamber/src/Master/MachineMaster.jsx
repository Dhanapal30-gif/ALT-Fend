import React, { useState } from 'react';
import './MachineMaster.css'
import { TextField, MenuItem, InputAdornment } from '@mui/material';

const MachineMaster = () => {

    const [formData, setFormData] = useState({
        UserName: '',
        SetMachineName: '',
        
    });

    const [formErrors, setFormErrors] = useState({
        HMI_Machine_Name: '',
        SetMachineName: '',
        
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className='MachineMaster'>
            <h6 style={{ marginTop: '-50px' }}>Machine Master</h6>
            <form style={{ marginTop: '29px' }}>
                
                <TextField
                    label="HMI_Machine_Name"
                    name="HMI_Machine_Name"
                    select
                    variant="standard"
                    fullWidth
                    value={formData.HMI_Machine_Name || ''}
                    style={{
                        width: '270px',
                        marginLeft: '22px',
                        marginTop: '20px',
                    }}
                    onChange={handleChange}
                    error={Boolean(formErrors.HMI_Machine_Name)}
                    helperText={formErrors.HMI_Machine_Name}
                   
                >
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="inactive">Inactive</MenuItem>
                </TextField>

                <TextField
                    label="SetMachineName"
                    name="SetMachineName"
                    select
                    variant="standard"
                    fullWidth
                    value={formData.SetMachineName || ''}
                    style={{
                        width: '270px',
                        marginLeft: '22px',
                        marginTop: '20px',
                    }}
                    onChange={handleChange}
                    error={Boolean(formErrors.SetMachineName)}
                    helperText={formErrors.SetMachineName}
                   
                >
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="inactive">Inactive</MenuItem>
                </TextField>


            </form>
            <div className="filedButton">
                <button className="Taskbutton">Clear</button>
                <button className="Taskbutton">Submit</button>
            </div>
        </div>
    )
}

export default MachineMaster