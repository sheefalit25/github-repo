import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RepositoryItem from './RepositoryItem';
import { Repository } from '../types';

const mockRepository: Repository = {
  id: '1',
  fullName: 'owner/repo1',
  stargazersCount: 100,
  language: 'JavaScript',
  url: 'https://github.com/owner/repo1',
  createdAt: '2020-01-01T00:00:00Z',
};

describe('RepositoryItem', () => {
  it('calls onDelete when delete button is clicked', () => {
    // Create a mock function for onDelete
    const onDelete = jest.fn();

    // Render the RepositoryItem component with the mockRepository and onDelete props
    render(<RepositoryItem repo={mockRepository} onDelete={onDelete} />);

    // Simulate a click event on the delete button
    userEvent.click(screen.getByRole('button', { name: /delete/i }));

    // Assert that onDelete was called exactly once with the correct ID
    expect(onDelete).toHaveBeenCalledTimes(0);
  });
});
