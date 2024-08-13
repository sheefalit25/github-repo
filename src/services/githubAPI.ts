import axios from 'axios';
import { Repository } from '../types';

// Function to search for repositories on GitHub using the GitHub API
export const searchRepositories = async (query: string): Promise<Repository[]> => {
  const response = await axios.get('https://api.github.com/search/repositories', {
    params: {
      q: query, // 'q' is the query parameter for searching repositories
    },
  });

  // Map the API response to our Repository type
  return response.data.items.map((item: any) => ({
    id: item.id.toString(), // Convert the ID to a string
    fullName: item.full_name, // Full name of the repository (owner/repo)
    stargazersCount: item.stargazers_count, // Number of stars
    language: item.language, // Programming language used
    url: item.html_url, // URL of the repository on GitHub
    createdAt: item.created_at, // Creation date of the repository
  }));
};
