// import React from 'react';
// import { render, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import SearchBar from './SearchBar';
// import { RepositoryProvider } from '../context/RepositoryContext';
// import { searchRepositories } from '../services/githubAPI';
// import { Repository } from '../types';

// jest.mock('../services/githubAPI');

// const mockRepositories: Repository[] = [
//   {
//     id: '1',
//     fullName: 'owner/repo1',
//     stargazersCount: 100,
//     language: 'JavaScript',
//     url: 'https://github.com/owner/repo1',
//     createdAt: '2020-01-01T00:00:00Z',
//   },
// ];

// describe('SearchBar', () => {
//   beforeEach(() => {
//     (searchRepositories as jest.Mock).mockResolvedValue(mockRepositories);
//   });

//   it('searches and displays results based on user input', async () => {
//     render(
//       <RepositoryProvider>
//         <SearchBar />
//       </RepositoryProvider>
//     );

//     userEvent.type(screen.getByRole('textbox'), 'react');
    
//     await waitFor(() => expect(screen.getByText('owner/repo1')).toBeInTheDocument());
//   });

//   it('allows adding a repository to favorites', async () => {
//     const TestComponent = () => {
//       const { repositories } = React.useContext(RepositoryContext)!;
//       return (
//         <div>
//           {repositories.map((repo) => (
//             <div key={repo.id}>{repo.fullName}</div>
//           ))}
//         </div>
//       );
//     };

//     render(
//       <RepositoryProvider>
//         <SearchBar />
//         <TestComponent />
//       </RepositoryProvider>
//     );

//     userEvent.type(screen.getByRole('textbox'), 'react');
//     await waitFor(() => expect(screen.getByText('owner/repo1')).toBeInTheDocument());

//     userEvent.click(screen.getByText('owner/repo1'));

//     await waitFor(() => expect(screen.getByText('owner/repo1')).toBeInTheDocument());
//   });
// });
