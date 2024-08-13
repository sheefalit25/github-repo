import React from 'react';
import { Container, Typography } from '@mui/material';
import SearchBar from './components/SearchBar';
import FavoriteList from './components/FavoriteList';
import { RepositoryProvider } from './context/RepositoryContext';

function App() {
  return (
    <RepositoryProvider>
      <Container>
        <Typography variant="h4" gutterBottom>
          GitHub Repository Favorites
        </Typography>
        <SearchBar />
        <FavoriteList />
      </Container>
    </RepositoryProvider>
  );
}

export default App;
