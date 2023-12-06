import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import {Box} from '@mui/material'

const LoginForm = () => {
    const [formData, setFormData] = useState({ name: '', phoneNumber: '', email: '' });
    const navigate = useNavigate();
  
    const handleFormSubmit = () => {
      if (!formData.name || !formData.phoneNumber || !formData.email) {
            alert('Please fill in all the fields before submitting.');
            return;
        }
      localStorage.setItem('userData', JSON.stringify(formData));
      console.log(formData)
      navigate("/home")
    };
    useEffect(() => {
        localStorage.clear();
      }, []);
  return (
    <Box className="p-4 flex flex-col justify-center bg-black/40 h-screen w-full items-center">  
      <h1 className='text-3xl font-serif font-bold'>Login</h1>
      <Box className="bg-white/75 w-[30%] h-[50%] rounded-lg flex flex-col justify-center">
      <form className='flex flex-col p-4 space-y-4' onSubmit={handleFormSubmit}>
        <TextField
          label="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <TextField
          label="Phone Number"
          value={formData.phoneNumber}
          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
        />
        <TextField
          label="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
      </Box>
    </Box>
  )
}

export default LoginForm
