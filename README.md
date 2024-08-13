# GitHub Repository Favorites

This project is a React application that allows users to search for their favorite GitHub repositories and save them to a list. Users can sort their favorite repositories by stars and creation date, and they can also remove repositories from the list. The application uses a `reposerver` API to store the repositories and the GitHub API to search for repositories.


### Installation

1. **Clone the repository**:

   \`\`\`
   git clone https://github.com/yourusername/github-repo-favorites.git
   cd github-repo-favorites
   \`\`\`

2. **Install dependencies**:

   \`\`\`bash
   npm install
   \`\`\`

### Running the Application

1. **Start the Repository Server**:

   Ensure that Docker is running on your machine, then start the `reposerver`:

   \`\`\`
   docker run -p 8080:8080 gcr.io/hiring-278615/reposerver:v1.1
   \`\`\`

2. **Start the React Application**:

   In a new terminal window or tab, start the React application:

   \`\`\`
   npm start
   \`\`\`

   The application should now be running at \`http://localhost:3000\`.