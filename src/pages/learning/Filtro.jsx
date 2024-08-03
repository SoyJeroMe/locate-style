import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box, Paper, IconButton } from '@mui/material';
import { FaFilter } from 'react-icons/fa';

const FilterComponent = () => {
  const [category, setCategory] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className='flex items-center m-auto justify-center'>
      <IconButton onClick={toggleFilters}>
        <FaFilter className='text-black size-11' />
      </IconButton>
      {showFilters && (
        <Paper elevation={3} style={{ padding: '10px', borderRadius: '10px', width: '80%', marginTop: '10px', marginBottom: '20px' }}>
          <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center">
            <FormControl margin="normal">
              <InputLabel>Categoria</InputLabel>
              <Select
                value={category}
                onChange={handleChange}
                style={{ minWidth: '120px' }}
              >
                <MenuItem value=""><em>Ninguna</em></MenuItem>
                <MenuItem value={10}>Tataujes</MenuItem>
                <MenuItem value={20}>Barberia</MenuItem>
                <MenuItem value={30}>Uñas</MenuItem>
              </Select>
            </FormControl>
            <FormControl margin="normal">
              <InputLabel>Precio</InputLabel>
              <Select
                value={category}
                onChange={handleChange}
                style={{ minWidth: '120px' }}
              >
                <MenuItem value=""><em>Ninguna</em></MenuItem>
                <MenuItem value={10}>Tataujes</MenuItem>
                <MenuItem value={20}>Barberia</MenuItem>
                <MenuItem value={30}>Uñas</MenuItem>
              </Select>
            </FormControl>
            <FormControl margin="normal">
              <InputLabel>Valoraciones</InputLabel>
              <Select
                value={category}
                onChange={handleChange}
                style={{ minWidth: '120px' }}
              >
                <MenuItem value=""><em>Ninguna</em></MenuItem>
                <MenuItem value={10}>Tataujes</MenuItem>
                <MenuItem value={20}>Barberia</MenuItem>
                <MenuItem value={30}>Uñas</MenuItem>
              </Select>
            </FormControl>
            <FormControl margin="normal">
              <InputLabel>Fecha de publicación</InputLabel>
              <Select
                value={category}
                onChange={handleChange}
                style={{ minWidth: '120px' }}
              >
                <MenuItem value=""><em>Ninguna</em></MenuItem>
                <MenuItem value={10}>Tataujes</MenuItem>
                <MenuItem value={20}>Barberia</MenuItem>
                <MenuItem value={30}>Uñas</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Paper>
      )}
    </div>
  );
};

export default FilterComponent;
