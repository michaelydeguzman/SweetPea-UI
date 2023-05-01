import React from "react";
import { TextField, Button, Box, Card, CardContent, Typography, InputAdornment, AppBar } from '@mui/material'
import Paper from '@mui/material/Paper';
import MainAppBar from '../components/ui/MainAppBar';
import Menu from '../pages/Menu';
import Center from '../components/ui/Center';
export function Home() {
    return (
        <>
         <Paper>
            <MainAppBar />
         
        </Paper>
           <Menu />
        </>
        
    )
}

export default Home;