import axios from 'axios';
import { Repository } from '../types';

export const searchRepositories = async (query: string): Promise<Repository[]> => {
  // Ensure that the query string is correctly encoded
  const response = await axios.get('https://api.github.com/search/repositories', {
    params: {
      q: query,  
    },
  });

  // Map the API response
  return response.data.items.map((item: any) => ({
    id: item.id.toString(),
    fullName: item.full_name,
    stargazersCount: item.stargazers_count,
    language: item.language,
    url: item.html_url,
    createdAt: item.created_at,
  }));
};
