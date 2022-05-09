import React, { useState } from 'react';
import { TextField, Button, Paper, Grid, Box, Stack } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const apiKey = 'jbrG2AiyrWHFmHAm33QHdUdwBwjWnW2ZcCdmq7YO';

const Asteroid = () => {
  const [asteroidID, setAsteroidID] = useState('2001865');

  const navigate = useNavigate();

  const onSubmitHandler = () => {
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/neo/${asteroidID}?api_key=${apiKey}`
      )
      .then((res) => {
        navigate('/info', { state: { response: res.data } });
      })
      .catch((err) => console.log(err));
  };

  const onClickRandom = () => {
    axios
      .get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY')
      .then((res) => {
        const asteroidData = res?.data?.near_earth_objects;
        const random = Math.floor(Math.random() * asteroidData?.length);
        navigate('/info', { state: { response: asteroidData[random] } });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Grid item lg={4} sm={4} md={4} xs={4}>
        <Paper sx={{ p: 4 }} elevation={10}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <TextField
              label='Enter Asteroid Id'
              variant='outlined'
              fullWidth
              value={asteroidID}
              onChange={(e) => setAsteroidID(e.target.value)}
            />
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} pt={3}>
              <Button
                variant='contained'
                onClick={onSubmitHandler}
                disabled={asteroidID.length !== 7}
              >
                Submit
              </Button>

              <Button
                variant='contained'
                color='secondary'
                onClick={onClickRandom}
              >
                Random Asteroid
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default Asteroid;
