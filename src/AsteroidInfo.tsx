import React from 'react';
import { Paper, Grid, Box, Typography } from '@mui/material';
import { useLocation, Navigate } from 'react-router-dom';

const AsteroidInfo = () => {
  const location: any = useLocation();
  if (location.state === null) {
    return <Navigate to='/' />;
  }
  return (
    <>
      <Grid item lg={7} sm={7} md={7} xs={7}>
        <Paper sx={{ p: 4 }} elevation={10}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
            }}
          >
            <Typography>
              <b>Name</b>: {location?.state?.response?.name}
            </Typography>
            <Typography>
              <b>Nasa JPL URL:</b> {location?.state?.response?.nasa_jpl_url}
            </Typography>
            <Typography>
              <b>Is potentially hazardous asteroid:</b>
              {` ${location?.state?.response?.is_potentially_hazardous_asteroid}`}
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default AsteroidInfo;
