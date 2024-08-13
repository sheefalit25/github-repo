import React, { useContext, useMemo, useState } from 'react';
import { List, Button } from '@mui/material';
import { RepositoryContext } from '../context/RepositoryContext';
import { Repository } from '../types';
import RepositoryItem from './RepositoryItem';

function FavoriteList() {
  const { repositories, removeRepository } = useContext(RepositoryContext)!;
  const [sortOrder, setSortOrder] = useState<'stargazersCount' | 'createdAt'>('stargazersCount');

  const sortedRepositories = useMemo(() => {
    return [...repositories].sort((a, b) => {
      if (sortOrder === 'stargazersCount') {
        return b.stargazersCount - a.stargazersCount;
      } else {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });
  }, [repositories, sortOrder]);

  return (
    <>
      <Button variant="outlined" onClick={() => setSortOrder('stargazersCount')}>
        Sort by Stars
      </Button>
      <Button variant="outlined" onClick={() => setSortOrder('createdAt')}>
        Sort by Date
      </Button>
      <List>
        {sortedRepositories.map((repo) => (
          <RepositoryItem key={repo.id} repo={repo} onDelete={removeRepository} />
        ))}
      </List>
    </>
  );
}

export default FavoriteList;
