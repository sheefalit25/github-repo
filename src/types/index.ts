// Type definitions for the Repository object
export interface Repository {
  id: string; // Unique identifier for the repository
  fullName: string; // Full name of the repository (e.g., owner/repo)
  stargazersCount: number; // Number of stars the repository has
  language: string; // Programming language used in the repository
  url: string; // URL to the repository on GitHub
  createdAt: string; // Date when the repository was created
}
