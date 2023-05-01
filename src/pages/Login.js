import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import authAction from '../../store/actions/authAction'; 
import { loginAsync } from '../store/reducers/authSlice';
import logo from '../assets/Logo PNG.png';
import { TextField, Button, Box, Card, CardContent, Typography, InputAdornment } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Center from '../components/ui/Center'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

//import useForm from '../../hooks/useForm'
import sweetPeaBG from '../assets/5183000.jpg';

const styles = {
    paperContainer: {
        backgroundImage: `url(${sweetPeaBG})`
    }
};

export function Login() {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // const loading = useSelector(state => state.auth.loading);
    // const error = useSelector(state => state.auth.error);

    //const [showPassword, setShowPassword] = useState(false);

    const [values, setValues] = useState([]);
    const [errors, setErrors] = useState([]);

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (areInputsValid()) {
            dispatch(loginAsync({ email, password }));

        } else {
            console.log(values);
        }
    }

    const areInputsValid = () => {
        let temp = {}
        temp.email = (/\S+@\S+\.\S+/).test(email) ? "" : "Email is not valid.";
        temp.password = password != "" ? "" : "This field is required.";
        setErrors(temp);
        return Object.values(temp).every(x => x == "");
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Paper style={styles.paperContainer}>
            <Center>

                <Card sx={{ width: 400 }}>
                    <CardContent sx={{ textAlign: "center" }}>
                        <img src={logo} className="App-logo" alt="logo" />
                        {/* <Typography variant="h3" sx={{ my: 3 }}>
                            Practice App
                        </Typography> */}
                        <Box sx={{
                            '& .MuiTextField-root': {
                                marginBottom: 2,
                                width: '90%'
                            }
                        }}>
                            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                                <TextField
                                    label="Email"
                                    name="email"
                                    variant="outlined"
                                    value={email}
                                    onChange={handleEmailChange}
                                    {...(errors.email && { error: true, helperText: errors.email })}
                                />
                                <TextField
                                    label="Password"
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    variant="outlined"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    InputProps={
                                        {
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        //onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }
                                    }
                                    {...(errors.password && { error: true, helperText: errors.password })}
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    color="primary"
                                    sx={{ width: '90%' }}>Login</Button>
                            </form>
                        </Box>
                    </CardContent>
                </Card>
            </Center>
        </Paper>
    )
}

export default Login
