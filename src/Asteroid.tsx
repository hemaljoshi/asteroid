import React, { useState } from 'react';
import {
  TextField,
  Button,
  Paper,
  Grid,
  Box,
  Stack,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const apiKey = 'jbrG2AiyrWHFmHAm33QHdUdwBwjWnW2ZcCdmq7YO';

interface asteroid {
  asteroidObj: {
    name: string;
    nasa_jpl_url: string;
    is_potentially_hazardous_asteroid: boolean;
  };
}
const Asteroid = () => {
  const [asteroidID, setAsteroidID] = useState<string>('');

  const navigate = useNavigate();

  const onSubmitHandler = () => {
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/neo/${asteroidID}?api_key=${apiKey}`
      )
      .then((res) => {
        const data: asteroid['asteroidObj'] = res.data;
        navigate('/info', { state: { response: data } });
      })
      .catch((err) => console.log(err));
  };

  const onClickRandom = () => {
    axios
      .get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY')
      .then((res) => {
        const asteroidData = res?.data?.near_earth_objects;
        const random = Math.floor(Math.random() * asteroidData?.length);
        setAsteroidID(asteroidData[random].id);
      });
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
            <Typography
              variant='h5'
              sx={{ mb: 3, fontWeight: 700 }}
              color='primary'
            >
              Search Asteroid Data
            </Typography>
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
                disabled={asteroidID.length === 0}
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
