// src/pages/HomePage.tsx

import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url('/background-image.jpg') center/cover no-repeat fixed;
`;

const StyledPaper = styled(Paper)`
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.7); /* Semi-transparent white */
  backdrop-filter: blur(10px); /* Apply blur effect */
  border-radius: 10px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const Title = styled(Typography)`
  text-align: center;
  margin-bottom: 20px;
  font-size: 3rem;
  font-family: 'Garamond', serif; /* Garamond font */
  color: #4caf50; /* Green color */
`;

const Description = styled(Typography)`
  text-align: center;
  margin-bottom: 40px;
  font-size: 1.5rem;
  color: #555; /* Slightly darker color */
`;

const HomePage: React.FC = () => {
  return (
    <div className="grid-container">
      <div className="navigation-bar">
        <div className="navigation-bar-left">
          <a href="/" className="active">Home</a>
          <a href="/about-us">About Us</a>
          <a href="/patient/create">Add Patient</a>
          <a href="/record/create">Add Record</a>
        </div>
        <div className="navigation-bar-right">
          <input type="search" />
          <button>Search</button>
        </div>
      </div>
      <div className="content-with-background-image">
        <StyledPaper elevation={3}>
          <Grid container spacing={3} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={8}>
              <Title variant="h1">Welcome to ToothFixers Ltd.</Title>
              <Description variant="body1">
                Providing exceptional dental care with a personal touch.
              </Description>
            </Grid>
          </Grid>
        </StyledPaper>
      </div>
    </div>
  );
};

export default HomePage;
