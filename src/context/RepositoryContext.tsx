import React, { createContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { Repository } from '../types';
import { getRepositories, saveRepository, deleteRepository } from '../services/repoServerAPI';

// Define the shape of the context value, including the repositories and functions to manipulate them
interface RepositoryContextType {
  repositories: Repository[];
  addRepository: (repo: Repository) => void;
  removeRepository: (id: string) => void;
}

// Create the context with an undefined default value
export const RepositoryContext = createContext<RepositoryContextType | undefined>(undefined);

// Props type for the RepositoryProvider component
interface RepositoryProviderProps {
  children: ReactNode;
}

// Context provider component that wraps around the part of the app that needs access to repositories
function RepositoryProvider({ children }: RepositoryProviderProps) {
  // State to hold the list of favorite repositories, initialized as an empty array
  const [repositories, setRepositories] = useState<Repository[]>([]);

  // Fetch the saved repositories from the server when the component mounts
  useEffect(() => {
    const fetchRepositories = async () => {
      // Fetch repositories and set the state
      const repos = await getRepositories();
      setRepositories(repos);
    };

    fetchRepositories(); // Call the function to load repositories
  }, []); // Empty dependency array means this runs only once, on component mount

  // Function to add a repository to the favorites list, with a check to limit to 10 repositories
  const addRepository = useCallback(async (repo: Repository) => {
    if (repositories.length >= 10) return; // Do nothing if the list already has 10 items
    await saveRepository(repo); // Save the new repository to the server
    setRepositories(prevRepos => [...prevRepos, repo]); // Update state with the new repository
  }, [repositories]); // Dependency array includes repositories to ensure it updates when they change

  // Function to remove a repository from the favorites list
  const removeRepository = useCallback(async (id: string) => {
    await deleteRepository(id); // Remove the repository from the server
    setRepositories(prevRepos => prevRepos.filter(repo => repo.id !== id)); // Update state without the deleted repository
  }, []); // Empty dependency array because this function doesn't depend on any outside variables

  return (
    // Provide the context value to child components
    <RepositoryContext.Provider value={{ repositories, addRepository, removeRepository }}>
      {children}
    </RepositoryContext.Provider>
  );
}

export { RepositoryProvider };
