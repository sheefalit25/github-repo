import React, { createContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { Repository } from '../types';
import { getRepositories, saveRepository, deleteRepository } from '../services/repoServerAPI';

// Define the shape of the context value
interface RepositoryContextType {
  repositories: Repository[];
  addRepository: (repo: Repository) => void;
  removeRepository: (id: string) => void;
}

// Create the context with an undefined default value
export const RepositoryContext = createContext<RepositoryContextType | undefined>(undefined);

interface RepositoryProviderProps {
  children: ReactNode;
}

// Context provider component
function RepositoryProvider({ children }: RepositoryProviderProps) {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    // Fetch saved repositories from the server on component mount
    const fetchRepositories = async () => {
      const repos = await getRepositories();
      setRepositories(repos);
    };

    fetchRepositories();
  }, []);

  // Callback function to add a repository, wrapped with useCallback for optimization
  const addRepository = useCallback(async (repo: Repository) => {
    if (repositories.length >= 10) return; // Limit to 10 repositories
    await saveRepository(repo);
    setRepositories(prevRepos => [...prevRepos, repo]);
  }, [repositories]);

  // Callback function to remove a repository, wrapped with useCallback for optimization
  const removeRepository = useCallback(async (id: string) => {
    await deleteRepository(id);
    setRepositories(prevRepos => prevRepos.filter(repo => repo.id !== id));
  }, []);

  return (
    <RepositoryContext.Provider value={{ repositories, addRepository, removeRepository }}>
      {children}
    </RepositoryContext.Provider>
  );
}

export { RepositoryProvider };
