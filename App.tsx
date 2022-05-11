import React from 'react';
import Asteroid from './src/Asteroid';
import AsteroidInfo from './src/AsteroidInfo';
import { Container, Grid } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Container maxWidth='lg'>
          <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            minHeight='100vh'
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Routes>
              <Route path='/' element={<Asteroid />} />
              <Route path='/info' element={<AsteroidInfo />} />
            </Routes>
          </Grid>
        </Container>
      </BrowserRouter>
    </>
  );
}
