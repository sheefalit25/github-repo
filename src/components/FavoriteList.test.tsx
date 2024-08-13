/*import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FavoriteList from './FavoriteList';
import { RepositoryProvider } from '../context/RepositoryContext';
import { Repository } from '../types';

const mockRepositories: Repository[] = [
  {
    id: '1',
    fullName: 'owner/repo1',
    stargazersCount: 100,
    language: 'JavaScript',
    url: 'https://github.com/owner/repo1',
    createdAt: '2020-01-01T00:00:00Z',
  },
  {
    id: '2',
    fullName: 'owner/repo2',
    stargazersCount: 200,
    language: 'TypeScript',
    url: 'https://github.com/owner/repo2',
    createdAt: '2021-01-01T00:00:00Z',
  },
];

describe('FavoriteList', () => {
  it('displays favorite repositories and allows sorting', () => {
    const TestComponent = () => {
      const { addRepository } = React.useContext(RepositoryContext)!;
      React.useEffect(() => {
        mockRepositories.forEach(repo => addRepository(repo));
      }, [addRepository]);
      return null;
    };

    render(
      <RepositoryProvider>
        <TestComponent />
        <FavoriteList />
      </RepositoryProvider>
    );

    expect(screen.getByText('owner/repo1')).toBeInTheDocument();
    expect(screen.getByText('owner/repo2')).toBeInTheDocument();

    userEvent.click(screen.getByText('Sort by Stars'));
    const firstRepo = screen.getAllByText(/owner\/repo/)[0];
    expect(firstRepo.textContent).toBe('owner/repo2');

    userEvent.click(screen.getByText('Sort by Date'));
    const secondRepo = screen.getAllByText(/owner\/repo/)[0];
    expect(secondRepo.textContent).toBe('owner/repo2');
  });

  it('allows removing repositories from favorites', async () => {
    const TestComponent = () => {
      const { addRepository } = React.useContext(RepositoryContext)!;
      React.useEffect(() => {
        mockRepositories.forEach(repo => addRepository(repo));
      }, [addRepository]);
      return null;
    };

    render(
      <RepositoryProvider>
        <TestComponent />
        <FavoriteList />
      </RepositoryProvider>
    );

    expect(screen.getByText('owner/repo1')).toBeInTheDocument();
    userEvent.click(screen.getAllByRole('button', { name: /delete/i })[0]);
    expect(screen.queryByText('owner/repo1')).not.toBeInTheDocument();
  });
});
*/