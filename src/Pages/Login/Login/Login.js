import { Alert, Button, CircularProgress, Container, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/login.png'
import Typography from '@mui/material/Typography';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { handleLoginUser, isLoading, error, user, signinWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)

        e.preventDefault();
        // e.target.reset();
    }


    const handleLoginSUbmit = e => {
        handleLoginUser(loginData.email, loginData.password, location, history)
        alert('submit');
        e.preventDefault();
    }

    const handleGoogleSingIn=()=>{
        signinWithGoogle(location,history)
    }


    return (


        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 8 }}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSUbmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name='email'
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
                        <Button sx={{ width: '75%', m: 1 }}
                            type="submit" variant="contained">Login</Button>


                        <NavLink
                            to='/register'
                            style={{ textDecoration: "none" }}
                        >
                            <Button variant="text">New User ? Please register</Button>
                        </NavLink>

                    </form>
                    <Button variant='contained' onClick={handleGoogleSingIn}>Signin With Google</Button>
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

export default Login;