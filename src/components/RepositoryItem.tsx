import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Repository } from '../types';

interface RepositoryItemProps {
  repo: Repository;
  onDelete: (id: string) => void;
}

function RepositoryItem({ repo, onDelete }: RepositoryItemProps) {
  return (
    <ListItem>
      <ListItemText
        primary={repo.fullName}
        secondary={`Language: ${repo.language} | Stars: ${repo.stargazersCount} | Created: ${new Date(repo.createdAt).toLocaleDateString()}`}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={() => onDelete(repo.id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default RepositoryItem;
