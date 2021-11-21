import { Alert, Button, CircularProgress, Container, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/login.png'
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';
import { useHistory } from 'react-router';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { handleRegister, user, isLoading, error } = useAuth();
    const history=useHistory()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)


    console.log(newLoginData)
        e.preventDefault();
        // e.target.reset();
    }


    const handleLoginSUbmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match')
            return;
        }
        handleRegister(loginData.email, loginData.password,loginData.name,history)
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 8 }}>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                  {!isLoading && <form onSubmit={handleLoginSUbmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name='name'
                            type='name'
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name='email'
                            type='email'
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type='password'
                            name='password'
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Retype Password"
                            type='password'
                            name='password2'
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                        <Button sx={{ width: '75%', m: 1 }}
                            type="submit" variant="contained">Login</Button>


                        <NavLink
                            to='/login'
                            style={{ textDecoration: "none" }}
                        >
                            <Button variant="text">Already Registered ? Please Login</Button>
                        </NavLink>

                    </form>}
                    {
                        isLoading && <CircularProgress color="secondary" />

                    }

                    {
                        user.email && <Alert severity="success">User Created successfully</Alert>

                    }
                    {
                        error && <Alert severity="error">{error}</Alert>

                    }
                </Grid>

                
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;