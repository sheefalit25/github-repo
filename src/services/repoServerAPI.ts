import axios from 'axios';
import { Repository } from '../types';

const API_URL = 'http://localhost:8080/repo'; // Base URL for the repo server API

// Function to fetch all repositories from the server
export const getRepositories = async (): Promise<Repository[]> => {
  const response = await axios.get<Repository[]>(API_URL);

  // Return the repositories or an empty array if the response data is not an array
  return Array.isArray(response.data) ? response.data : [];
};

// Function to save a repository to the server
export const saveRepository = async (repo: Repository) => {
  await axios.post(API_URL, repo); // Send a POST request to save the repository
};

// Function to delete a repository from the server by ID
export const deleteRepository = async (id: string) => {
  await axios.delete(`${API_URL}/${id}`); // Send a DELETE request to remove the repository
};
