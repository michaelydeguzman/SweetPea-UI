import React from "react";
import { TextField, Button, Box, Card, CardContent, Typography, InputAdornment, AppBar } from '@mui/material'
import Paper from '@mui/material/Paper';
import TopNavBar from '../features/topnavbar/TopNavBar';
import Menu from '../features/menu/Menu';
import Center from '../components/ui/Center';
import { useSelector } from "react-redux";

export function Home() {

    
    const selectedTabIndex = useSelector((state)=> state.topNavBar.selectedTabIndex);

    return (
        <Paper>
            <TopNavBar />

            {selectedTabIndex == 0 && (

                <Menu/>
            )}
        </Paper>
    )
}

export default Home;