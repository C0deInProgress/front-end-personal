import './App.css';
import React, { useEffect, useState } from 'react';
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import Register from './pages/Register';
import NewTraining from './pages/NewTraining';
import NewExercises from './pages/NewExercises';
import AllExercises from './pages/AllExercises';
import TrainingPlan from './pages/TrainingPlan';

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem('token'))
    console.log(token)
    if (!token) {
      return <Login />
    }
  }, [token])

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/newTraining" element={<NewTraining />} />
          <Route path="/newExercises" element={<NewExercises />} />
          <Route path="/allExercises" element={<AllExercises />} />
          <Route path="/trainingPlan" element={<TrainingPlan />} />
          <Route path="*" element={<h1>Página não encontrada!</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
