import React, { useState, useContext, useCallback } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { RepositoryContext } from '../context/RepositoryContext';
import { searchRepositories } from '../services/githubAPI';
import { Repository } from '../types';

function SearchBar() {
  // State to hold the current search query
  const [query, setQuery] = useState('');
  // State to hold the list of search results (repository options)
  const [options, setOptions] = useState<Repository[]>([]);
  // Get the addRepository function from the context
  const { addRepository } = useContext(RepositoryContext)!;

  // Function to handle searching as the user types in the search bar
  const handleSearch = useCallback(async (event: React.SyntheticEvent<Element, Event>, value: string) => {
    setQuery(value); // Update the search query state

    if (value.length > 2) { // Perform search only if the query is longer than 2 characters
      const results = await searchRepositories(value); // Call GitHub API to search for repositories
      setOptions(results); // Update the options state with the search results
    }
  }, []);

  // Function to handle the selection of a repository from the autocomplete dropdown
  const handleSelect = useCallback((event: any, value: Repository | null) => {
    if (value) { // Check if a valid repository was selected
      addRepository(value); // Add the selected repository to the favorites list
      setQuery(''); // Clear the search query
      setOptions([]); // Clear the search results
    }
  }, [addRepository]); // Dependency array includes addRepository to ensure it updates when it changes

  return (
    <Autocomplete
      options={options} // Options to display in the dropdown, from the search results
      getOptionLabel={(option) => option.fullName} // Define how each option should be displayed
      onInputChange={handleSearch} // Handle changes to the search input
      onChange={handleSelect} // Handle selection of a repository from the dropdown
      inputValue={query} // Bind the search input value to the state
      renderInput={(params) => <TextField {...params} label="Search GitHub Repositories" />} // Render a text field with a label
    />
  );
}

export default SearchBar;
