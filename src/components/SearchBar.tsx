import React, { useState, useContext, useCallback } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { RepositoryContext } from '../context/RepositoryContext';
import { searchRepositories } from '../services/githubAPI';
import { Repository } from '../types';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [options, setOptions] = useState<Repository[]>([]);
  const { addRepository } = useContext(RepositoryContext)!;

  // Updated function signature to match autocomplete's expectations
  const handleSearch = useCallback(async (event: React.SyntheticEvent<Element, Event>, value: string) => {
    setQuery(value);

    if (value.length > 2) {
      const results = await searchRepositories(value);
      setOptions(results);
    }
  }, []);

  // Optimized selection handler with useCallback
  const handleSelect = useCallback((event: any, value: Repository | null) => {
    if (value) {
      addRepository(value);
      setQuery('');
      setOptions([]);
    }
  }, [addRepository]);

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.fullName}
      onInputChange={handleSearch}
      onChange={handleSelect}
      inputValue={query}
      renderInput={(params) => <TextField {...params} label="Search GitHub Repositories" />}
    />
  );
}

export default SearchBar;
