import * as React from 'react';
import { Drawer, Grid, useMediaQuery } from '@mui/material'
import images from '../assets/img/mutuus-1/Mujer.png';
import Doctor from '../assets/img/mutuus-1/Doctor.png';
import Empresario from '../assets/img/mutuus-1/Empresaio.png';
import Characters from '../assets/img/mutuus-1/Characters.png';
import Logo1 from '../assets/img/mutuus-1/Logo1.png';
export const SideBar = () => {

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
                marginLeft:3,
                marginRight:3,
                alignItems: 'center',
                textAlign:'center',
                position:'relative',
                top: 300,
                }}>
                <img src={Logo1} width={isTable ? '100' : '350'}/>
            </Grid>
            <Grid sx={{
                alignItems: 'center',
                textAlign:'center',
                position:'absolute',
                bottom:'0'
                }}>
                <img src={images} width={isTable ? '0' : '90'} height="200"/>
                <img src={Doctor} width={isTable ? '0' : '90'} height="200"/>
                <img src={Empresario} width={isTable ? '0' : '90'} height="200"/>
                <img src={Characters} width={isTable ? '0' : '120'} height="210"/>
            </Grid>
        </Drawer>
  )
}