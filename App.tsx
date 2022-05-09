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
