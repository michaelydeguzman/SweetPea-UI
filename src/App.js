import React from 'react';
import { Counter } from './features/counter/Counter';
import Login from './pages/Login';
import Home from './pages/Home';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#9ed0dd',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#29634a',
    },
    text: {
      primary: '#000000',
      secondary: '#000000',
    },
    background: {
      default: '#9ed0dd'
    }
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
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