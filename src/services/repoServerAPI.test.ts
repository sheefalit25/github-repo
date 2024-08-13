import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getRepositories, saveRepository, deleteRepository } from './repoServerAPI';
import { Repository } from '../types';

const mock = new MockAdapter(axios);
const mockRepositories: Repository[] = [
  {
    id: '1',
    fullName: 'owner/repo1',
    stargazersCount: 100,
    language: 'JavaScript',
    url: 'https://github.com/owner/repo1',
    createdAt: '2020-01-01T00:00:00Z',
  },
];

describe('repoServerAPI', () => {
  afterEach(() => {
    mock.reset();
  });

  it('getRepositories fetches repositories from the server', async () => {
    mock.onGet('http://localhost:8080/repo').reply(200, mockRepositories);

    const result = await getRepositories();
    expect(result).toEqual(mockRepositories);
  });

  it('saveRepository sends a POST request to the server', async () => {
    mock.onPost('http://localhost:8080/repo').reply(200);

    await saveRepository(mockRepositories[0]);
    expect(mock.history.post.length).toBe(1);
  });

  it('deleteRepository sends a DELETE request to the server', async () => {
    mock.onDelete('http://localhost:8080/repo/1').reply(200);

    await deleteRepository('1');
    expect(mock.history.delete.length).toBe(1);
  });
});
