import React from 'react';
import { Paper, Grid, Box, Typography } from '@mui/material';
import { useLocation, Navigate } from 'react-router-dom';

interface asteroidData {
  response: {
    name: string;
    nasa_jpl_url: string;
    is_potentially_hazardous_asteroid: boolean;
  };
}

const AsteroidInfo = () => {
  const { state }: any = useLocation();
  const response: asteroidData['response'] = state?.response;

  return (
    <>
      <Grid item lg={7} sm={7} md={7} xs={7}>
        <Paper sx={{ p: 4 }} elevation={10}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              variant='h5'
              sx={{ mb: 3, fontWeight: 700 }}
              color={state !== null ? 'primary' : 'error'}
            >
              Asteroid Data {state !== null ? '' : ' is null'}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
            }}
          >
            {state !== null && (
              <Box>
                <Typography>
                  <b>Name</b>: {response?.name}
                </Typography>
                <Typography>
                  <b>Nasa JPL URL:</b> {response?.nasa_jpl_url}
                </Typography>
                <Typography>
                  <b>Is potentially hazardous asteroid:</b>
                  {` ${response?.is_potentially_hazardous_asteroid}`}
                </Typography>
              </Box>
            )}
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default AsteroidInfo;
