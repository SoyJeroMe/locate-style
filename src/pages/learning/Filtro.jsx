import React, {useState} from 'react'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Paper,
  IconButton,
} from '@mui/material'
import {FaFilter} from 'react-icons/fa'

const Filtro = ({onFilter}) => {
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [rating, setRating] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const handleCategoryChange = (event) => {
    setCategory(event.target.value)
    onFilter(event.target.value, price, rating, difficulty)
  }

  const handlePriceChange = (event) => {
    setPrice(event.target.value)
    onFilter(category, event.target.value, rating, difficulty)
  }

  const handleRatingChange = (event) => {
    setRating(event.target.value)
    onFilter(category, price, event.target.value, difficulty)
  }

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value)
    onFilter(category, price, rating, event.target.value)
  }

  const toggleFilters = () => {
    setShowFilters(!showFilters)
  }

  return (
    <div className="flex items-center m-auto justify-center">
      <IconButton onClick={toggleFilters}>
        <FaFilter className="text-black size-11" />
      </IconButton>
      {showFilters && (
        <Paper
          elevation={3}
          style={{
            padding: '10px',
            borderRadius: '10px',
            width: '80%',
            marginTop: '10px',
            marginBottom: '20px',
          }}
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <FormControl margin="dense">
              <InputLabel className="">Categoria</InputLabel>
              <Select
                className="mt-11"
                value={category}
                onChange={handleCategoryChange}
                style={{minWidth: '120px'}}
              >
                <MenuItem value="">
                  <em>Ninguna</em>
                </MenuItem>
                <MenuItem value="Tatuajes">Tatuajes</MenuItem>
                <MenuItem value="Barberia">Barberia</MenuItem>
                <MenuItem value="Uñas">Uñas</MenuItem>
                <MenuItem value="Tatuajes">Diseño de moda</MenuItem>
                <MenuItem value="Barberia">Entrenamiento Personales</MenuItem>
                <MenuItem value="Uñas">Uñas</MenuItem>
              </Select>
            </FormControl>
            <FormControl margin="normal">
              <InputLabel>Precio</InputLabel>
              <Select
                className="mt-11"
                value={price}
                onChange={handlePriceChange}
                style={{minWidth: '120px'}}
              >
                <MenuItem value="">
                  <em>Ninguna</em>
                </MenuItem>
                <MenuItem value="low">Hasta $100</MenuItem>
                <MenuItem value="medium">$101 - $200</MenuItem>
                <MenuItem value="high">Más de $200</MenuItem>
              </Select>
            </FormControl>
            <FormControl margin="normal">
              <InputLabel>Valoración</InputLabel>
              <Select
                className="mt-11"
                value={rating}
                onChange={handleRatingChange}
                style={{minWidth: '120px'}}
              >
                <MenuItem value="">
                  <em>Ninguna</em>
                </MenuItem>
                <MenuItem value="1">1 estrella o más</MenuItem>
                <MenuItem value="2">2 estrellas o más</MenuItem>
                <MenuItem value="3">3 estrellas o más</MenuItem>
                <MenuItem value="4">4 estrellas o más</MenuItem>
                <MenuItem value="5">5 estrellas</MenuItem>
              </Select>
            </FormControl>
            <FormControl margin="normal">
              <InputLabel>Dificultad</InputLabel>
              <Select
                className="mt-11"
                value={difficulty}
                onChange={handleDifficultyChange}
                style={{minWidth: '120px'}}
              >
                <MenuItem value="">
                  <em>Ninguna</em>
                </MenuItem>
                <MenuItem value="Principiante">Principiante</MenuItem>
                <MenuItem value="Intermedio">Intermedio</MenuItem>
                <MenuItem value="Avanzado">Avanzado</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Paper>
      )}
    </div>
  )
}

export default Filtro
