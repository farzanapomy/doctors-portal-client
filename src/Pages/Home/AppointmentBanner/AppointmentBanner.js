import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/doctor.png'
import Typography from '@mui/material/Typography';


const appointmentBg = {
    backGround: `url(${bg})`
}
const AppointmentBanner = () => {
    return (
        <Box sx={{ width: '100%' }} style={appointmentBg}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6}>
                    <img src={doctor} style={{ width: '400px' }} alt="" />
                </Grid>
                <Grid item xs={12} md={6} variant="h6">
                    <Typography>Appointment</Typography>
                </Grid>

            </Grid>
        </Box>
    );
};

export default AppointmentBanner;