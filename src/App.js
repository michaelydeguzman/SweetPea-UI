import React from 'react';
import { Counter } from './features/counter/Counter';
import Login from './pages/Login';
import Home from './pages/Home';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { customTheme } from './Theme';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;