import React from 'react';
import { List, Link, Grid } from '@mui/material';
import { Link as RouLink  } from "react-router-dom"

export const ListComponent = ({ links }) => {
  return (
    <List>
      {links.map((link, index) => (
        <Grid container justifyContent='center'>
            <Link key={index} sx={{  fontSize:12, color:'#00000080', fontFamily:'Montserrat' }} component={RouLink} to={link.to}>
        {link.text} </Link>
        </Grid>
        
      
      ))}
    </List>
  );
};