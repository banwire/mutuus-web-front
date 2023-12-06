import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const LoginButton = styled(Button)({
    textTransform: 'none',
    fontSize: 13,
    lineHeight: 1.5,
    backgroundColor: '#9CD41C',
    color: '#fff',
    fontFamily: 'Mulish',
    borderRadius:30,
    width:140,
    height:30,
  
    '&:hover': {
      backgroundColor: '#003F9A',
      borderColor: '#0062cc',
      boxShadow: 'none',
      color:'#fff'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });
  export const LoginButtonGoogle = styled(Button)({
    textTransform: 'none',
    fontSize: 13,
    lineHeight: 1.5,
    backgroundColor: '#9CD41C',
    color: '#fff',
    fontFamily: 'Mulish',
    borderRadius:30,
    height:30,
  
    '&:hover': {
      backgroundColor: '#003F9A',
      borderColor: '#0062cc',
      boxShadow: 'none',
      color:'#fff'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });

  export const PrimaryButton = styled(Button)({
    textTransform: 'none',
    fontFamily: 'Montserrat',
    backgroundColor: '#C0C0C0',
    width:150,
    color: '#003896',
    fontSize: 14,
    lineHeight: 1.5,
    borderRadius:30,
    '&:hover': {
      backgroundColor: '#183B91',
      borderColor: '#0062cc',
      boxShadow: 'none',
      color:'#fff'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });
  export const SecundaryButton = styled(Button)({
    textTransform: 'none',
    fontFamily: 'Montserrat',
    fontSize: 14,
    backgroundColor: '#9CD41C',
    width:150,
    color: '#FFFFFF',
    lineHeight: 1.5,
    borderRadius:30,
    '&:hover': {
      backgroundColor: '#444343',
      borderColor: '#0062cc',
      boxShadow: 'none',
      color:'#FFFFFF'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });

  export const PrimaryButtonCode = styled(Button)({
    textTransform: 'none',
    fontFamily: 'Montserrat',
    backgroundColor: '#EFEFEF',
    width:170,
    color: '#003896',
    fontSize: 15,
    lineHeight: 1.5,
    borderRadius:90,
    '&:hover': {
      backgroundColor: '#183B91',
      borderColor: '#0062cc',
      boxShadow: 'none',
      color:'#fff'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });
  export const SecundaryButtonCode = styled(Button)({
    textTransform: 'none',
    fontFamily: 'Montserrat',
    fontSize: 15,
    backgroundColor: '#9CD41C',
    width:170,
    color: '#FFFFFF',
    lineHeight: 1.5,
    borderRadius:90,
    '&:hover': {
      backgroundColor: '#444343',
      borderColor: '#0062cc',
      boxShadow: 'none',
      color:'#FFFFFF'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });