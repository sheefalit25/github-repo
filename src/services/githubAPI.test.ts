import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { searchRepositories } from './githubAPI';

const mock = new MockAdapter(axios);

describe('githubAPI', () => {
  afterEach(() => {
    mock.reset();
  });

  it('searchRepositories fetches and returns repository data', async () => {
    const mockData = {
      items: [
        {
          id: 1,
          full_name: 'owner/repo1',
          stargazers_count: 100,
          language: 'JavaScript',
          html_url: 'https://github.com/owner/repo1',
          created_at: '2020-01-01T00:00:00Z',
        },
      ],
    };

    mock.onGet('https://api.github.com/search/repositories').reply(200, mockData);

    const result = await searchRepositories('react');
    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({
      id: '1',
      fullName: 'owner/repo1',
      stargazersCount: 100,
      language: 'JavaScript',
      url: 'https://github.com/owner/repo1',
      createdAt: '2020-01-01T00:00:00Z',
    });
  });
});
