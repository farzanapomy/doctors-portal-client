import React from 'react';
import { Grid, Button } from '@mui/material';
import Box from '@mui/material/Box';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import Typography from '@mui/material/Typography';


const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74,.9)',
    backgroundBlendMode: 'darken,luminosity',
    marginTop: '175px',


}


const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }} >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={5}>
                    <img src={doctor} style={{ width: '400px', marginTop: '-120px' }} alt="" />
                </Grid>
                <Grid item xs={12} md={6}
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        textAlign: 'left'
                    }}>
                    <Box>
                        <Typography variant="h6" style={{ color: '#56D1D4 ' ,mb:5}}>Appointment</Typography>
                        <Typography variant="h4" sx={{my:4}}>Make An Appointment Today</Typography>
                        <Typography variant="h6" sx={{my:2, color: 'white', fontSize: 14, fontWeight: 300 }}>It is a long established fact that a reader will be distractebdy the reabole content of a page when looking at it's.</Typography>
                        <Button variant="contained" style={{backgroundColor:'#5CDDE0'}}>Learn More</Button>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default AppointmentBanner;