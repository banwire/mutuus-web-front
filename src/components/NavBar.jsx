import { AppBar, Grid, IconButton, Toolbar } from '@mui/material';
import { LogoutOutlined } from '@mui/icons-material';
import Stack from '@mui/material/Stack';
import { Link as RouLink} from "react-router-dom"
import images from '../assets/img/mutuus-logo.png';

export const NavBar = () => {
  return (
    <AppBar 
        position='fixed'
        sx={{backgroundColor: '#183B91' }} 
    >
        <Toolbar>
            <Grid component={RouLink} to='/login' container direction='row' justifyContent='space-between' alignItems='center'>
            <Stack direction="row" spacing={2}>
            <img src={images} width="230" height="85"/>
    </Stack>

                {/* <IconButton color='error'>
                    <LogoutOutlined />
                </IconButton> */}
            </Grid>

        </Toolbar>
    </AppBar>
  )
}