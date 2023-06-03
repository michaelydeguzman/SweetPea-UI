import React from "react";
import { TextField, Button, Box, Card, CardContent, Typography, InputAdornment, AppBar, Container } from '@mui/material'
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

            <Container sx={{
                marginTop: 20,
                backgroundColor: 'primary.main',
                }}>
            
                {selectedTabIndex == 0 && (
                    <Menu/>
                )}
            
            
            </Container>
        </Paper>
    )
}

export default Home;