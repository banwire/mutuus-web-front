import React from 'react';
import { FormControl, Grid, InputLabel, OutlinedInput, Typography } from '@mui/material';
import Select from 'react-select'
import { useField } from 'formik';

export const SelectField = ({
    label,
    name,
    errors = {},
    data,
    placeholder,
    styleSelect,
    styleLabel,
    styleError,
    isSearch= false,
}) => {
    const [field,meta, helpers] = useField(name);
    return (
        <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} margin={3} style={{ textAlign: 'left' }} flexDirection={'column'} justifyContent={'center'}>
            <Typography variant="body2" color={'black'} style={{ fontSize: '1.3rem', fontFamily: 'Montserrat', fontWeight: 'bolder', ...styleLabel }}>{label}</Typography>
            <Select options={data} isSearchable={isSearch} placeholder={placeholder} onChange={(value) => helpers.setValue(value.value)} styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused ? 'red' : '#AED43A',
                    color: '#AED43A',
                    fontFamily: 'Montserrat',
                    borderRadius: 30,
                    fontSize: '1.1rem', 
                    padding: 0,
                    ...styleSelect
                }),
            }} />
            {errors[name] &&
                <Typography variant="body2" color={'red'} style={{ fontSize: '9px', fontFamily: 'Montserrat', ...styleError }}>
                    {
                        errors[name]
                    }
                </Typography>
            }
        </Grid>
    );
};

export default SelectField;