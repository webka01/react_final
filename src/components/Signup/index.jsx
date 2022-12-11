import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from '@mui/material';
import { useEffect, useState } from "react";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


import { IMaskInput } from 'react-imask';


import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';
// import { useEffect, useState } from "react";

const URL = "http://localhost:3000/api/users/signup"


const theme = createTheme();



const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="(+#) 000-000-0000"
            definitions={{
                '#': /[1-9]/,
            }}
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});


export const SignUp = () => {
    const [phoneNumber, setPhoneNumber] = useState("");

    const navigate = useNavigate();
    const openAlert=()=>{
        <Stack sx={{ width: '100%' }} spacing={2}>

            <Alert variant="filled" severity="success">
                This is a success alert
            </Alert>

        </Stack>
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        

        


        const datata = new FormData(event.currentTarget);

        console.log(datata.get('firstName'));
        console.log(datata.get('phone'));

        console.log(datata.get('email'));

        console.log(datata.get('password'));



        axios.post(`${URL}`, {
            firstName: datata.get('firstName'),
            phoneNumber: datata.get('phone'),
            email: datata.get('email'),
            password: datata.get('password')


        }).then((response) => {
            if (response.status !== 200) {
                alert('ne sozdal')
            }
            else {
                alert('sozdal usera!')
                navigate('/signin')
            }
        }).catch((err) => {
            alert('ne sozdal')
        })
        


    };


    const onPhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);

    }


    return (
        <ThemeProvider theme={theme} >
            <Container component="main"  maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    onChange={onPhoneNumberChange}
                                    InputProps={{
                                        inputComponent: TextMaskCustom,
                                    }}
                                    value={phoneNumber}
                                    fullWidth
                                    label="Phone Number"
                                    name="phone"
                                    autoComplete="phone"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>

                        </Grid>
                        <Button
                            onClick={openAlert}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/signin" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
}