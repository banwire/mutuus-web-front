import * as React from 'react';
import { useMediaQuery, Drawer, Grid,} from '@mui/material'
import images from '../assets/img/mutuus-1/Character_1.png';
import Logo1 from '../assets/img/mutuus-1/Logo1.png';
export const SideBarRegister = () => {
    const isTable = useMediaQuery('(max-width: 1030px)');
    const [open, setOpen] = React.useState(!isTable);

    const isMobile = useMediaQuery('(max-width: 650px)');
    const [open1, setOpen1] = React.useState(!isMobile);

    const handleDrawerClose = () => {
        if (isTable) {
            setOpen(false);
        }
        if (isMobile) {
            setOpen1(false);
        }
    };

    const handleDrawerToggle = () => {
        setOpen(!open);
        setOpen(!open1);
    };
  return (
        <Drawer
            variant={isTable && isMobile ? 'temporary' : 'permanent'}
            open={open}
            onClose={handleDrawerClose}
            onClick={handleDrawerToggle}
            ModalProps={{
            keepMounted: true,
            }}
        >
            <Grid sx={{
                 marginLeft:5,
                 marginRight:5,
                 alignItems: 'center',
                 textAlign:'center',
                 position:'relative',
                 top: 30,
            }}>
                <br />
            <img src={Logo1}  width={isTable ? '100' : '350'}/>
            </Grid>
            <Grid sx={{
                justifyContent:'center',
                alignItems: 'center',
                textAlign:'center',
                marginTop:20
            }}>
            {
                isTable ? <p style={{fontSize:10} }></p>
                 : 
                 <p style={{fontSize:21, fontFamily:'Gilam Regular'} }>El seguro que buscas, <strong style={{color:'#AED43A'} }>
                    NO</strong>  es un seguro.</p>

            }
            </Grid>
            <Grid sx={{ 
                justifyContent:'center',
                alignItems: 'center',
                position:'absolute',
                bottom:'0'
                }}>
                <img src={images}width={isTable ? '0' : '400'}/>
            </Grid>
        </Drawer>

  )
}