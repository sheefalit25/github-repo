import React from 'react';
import { Container, Typography } from '@mui/material';
import SearchBar from './components/SearchBar';
import FavoriteList from './components/FavoriteList';
import { RepositoryProvider } from './context/RepositoryContext';

// The main application component that wraps all other components
function App() {
  return (
    // RepositoryProvider provides global state management for repositories
    <RepositoryProvider>
      <Container>
        {/* Title of the application */}
        <Typography variant="h4" gutterBottom>
          GitHub Repository Favorites
        </Typography>
        {/* SearchBar component for searching GitHub repositories */}
        <SearchBar />
        {/* FavoriteList component for displaying favorite repositories */}
        <FavoriteList />
      </Container>
    </RepositoryProvider>
  );
}

export default App;
