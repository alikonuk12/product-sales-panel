import React from 'react';
import { SearchOutlined } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import classes from './index.module.scss';

const SearchInput = ({ value, onChange }) => {
    return (
        <TextField
            variant='outlined'
            size='small'
            placeholder='Search'
            value={value}
            onChange={onChange}
            classes={{ root: classes.container }}
            InputProps={{
                startAdornment:
                    <InputAdornment position="start">
                        <SearchOutlined />
                    </InputAdornment>
            }}
        />
    );
}

export default SearchInput;