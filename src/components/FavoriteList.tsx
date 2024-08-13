import React, { useContext, useMemo, useState } from 'react';
import { List, Button } from '@mui/material';
import { RepositoryContext } from '../context/RepositoryContext';
import RepositoryItem from './RepositoryItem';
import { Repository } from '../types';

function FavoriteList() {
  // Get the repositories and removeRepository function from the context
  const { repositories, removeRepository } = useContext(RepositoryContext)!;
  // State to control the sorting order (by stars or by creation date)
  const [sortOrder, setSortOrder] = useState<'stargazersCount' | 'createdAt'>('stargazersCount');

  // Memoize the sorted repositories to avoid unnecessary sorting on every render
  const sortedRepositories = useMemo(() => {
    return [...repositories].sort((a, b) => {
      if (sortOrder === 'stargazersCount') {
        return b.stargazersCount - a.stargazersCount; // Sort by stargazers count
      } else {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(); // Sort by creation date
      }
    });
  }, [repositories, sortOrder]); // Dependency array includes repositories and sortOrder to ensure it updates when they change

  return (
    <>
      {/* Buttons to switch sorting order */}
      <Button variant="outlined" onClick={() => setSortOrder('stargazersCount')}>
        Sort by Stars
      </Button>
      <Button variant="outlined" onClick={() => setSortOrder('createdAt')}>
        Sort by Date
      </Button>
      {/* List of sorted repositories */}
      <List>
        {sortedRepositories.map((repo) => (
          <RepositoryItem key={repo.id} repo={repo} onDelete={removeRepository} />
        ))}
      </List>
    </>
  );
}

export default FavoriteList;
