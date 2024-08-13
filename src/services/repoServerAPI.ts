import axios from 'axios';
import { Repository } from '../types';

const API_URL = 'http://localhost:8080/repo/';

// Fetch all repositories from the server
export const getRepositories = async (): Promise<Repository[]> => {
    const response = await axios.get<Repository[]>(API_URL);
  
    // Handle cases where the response data might not be an array
    return Array.isArray(response.data) ? response.data : [];
  };
  

// Save a repository to the server
export const saveRepository = async (repo: Repository) => {
  await axios.post(API_URL, repo);
};

// Delete a repository from the server by ID
export const deleteRepository = async (id: string) => {
  await axios.delete(`${API_URL}/${id}`);
};
