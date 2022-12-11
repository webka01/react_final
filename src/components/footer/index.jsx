import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Footer=()=>{
    const theme = createTheme();



    return(
        <ThemeProvider  theme={theme}>
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Contact with us
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    dsfjwoegnwoegbwogoeagosngjsgosgos
                </Typography>
                
            </Box>
        </ThemeProvider>
    )
}