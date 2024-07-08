import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ManagePatientsPage from './pages/ManagePatientsPage';
import ManageClinicalRecordsPage from './pages/ManageClinicalRecordsPage';
import { ThemeProvider } from '@mui/material/styles';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #ecf0f1;
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const NavBar = styled.nav`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #27ae60;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Container>
          <NavBar>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/manage-patients">Manage Patients</NavLink>
            <NavLink to="/manage-clinical-records">Manage Clinical Records</NavLink>
          </NavBar>
          <Content>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/manage-patients" element={<ManagePatientsPage />} />
              <Route path="/manage-clinical-records" element={<ManageClinicalRecordsPage />} />
            </Routes>
          </Content>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
