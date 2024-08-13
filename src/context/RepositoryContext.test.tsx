// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import { RepositoryProvider, RepositoryContext } from './RepositoryContext';
// import { getRepositories } from '../services/repoServerAPI';
// import { Repository } from '../types';

// jest.mock('../services/repoServerAPI');

// const mockRepositories: Repository[] = [
//   {
//     id: '1',
//     fullName: 'owner/repo1',
//     stargazersCount: 100,
//     language: 'JavaScript',
//     url: 'https://github.com/owner/repo1',
//     createdAt: '2020-01-01T00:00:00Z',
//   },
//   {
//     id: '2',
//     fullName: 'owner/repo2',
//     stargazersCount: 200,
//     language: 'TypeScript',
//     url: 'https://github.com/owner/repo2',
//     createdAt: '2021-01-01T00:00:00Z',
//   },
// ];

// describe('RepositoryContext', () => {
//   beforeEach(() => {
//     (getRepositories as jest.Mock).mockResolvedValue(mockRepositories);
//   });

//   it('provides repositories data to child components', async () => {
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
//         <TestComponent />
//       </RepositoryProvider>
//     );

//     // Checking if the repositories are rendered correctly
//     expect(screen.getByText('owner/repo1')).toBeInTheDocument();
//     expect(screen.getByText('owner/repo2')).toBeInTheDocument();
//   });
// });
