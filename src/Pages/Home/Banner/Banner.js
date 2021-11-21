import React from 'react';
import { Box, Grid, Typography, Button, Container } from '@mui/material';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';

const bannerBg = {
    background: `url(${bg})`,
}

const verticalCenter = {
    display: 'flex',
    height: '400px',
    alignItems: 'center'
}

const Banner = () => {

    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ ...verticalCenter, textAlign: 'left' }}>
                    <Box>
                        <Typography variant='h3' >
                            Your new smile <br />
                            Start Here
                        </Typography>
                        <Typography variant='h6'
                            sx={{
                                fontSize: 13,
                                color: 'gray',
                                fontWeight: 300,
                                mb: 5
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perspiciatis, dolorum eum nihil alias suscipit maiores aliquid a voluptate deleniti.
                        </Typography>

                        
                        <Button variant='contained' style={{ backgroundColor: '#5CDDE0' }}>Get Appointment</Button>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};


export default Banner;