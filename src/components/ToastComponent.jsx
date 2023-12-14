import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

  export const  ToastComponent = ({ open, message, severit, duration = 3000, handleClose }) => {
    const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleCloseToast = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsOpen(false);
    handleClose();
  };
  
    return (
        <Snackbar
        open={isOpen}
        autoHideDuration={duration}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseToast} severity='error' sx={{ 
            width: '100%',
            fontSize: 12, // Modificar tamaño de fuente
            fontFamily: 'Montserrat, sans-serif', 
            }}variant="filled">
          {message}
        </Alert>
      </Snackbar>
    );
  };
  
