Frontend for Book Management App 📚
This repository contains the frontend for the Book Management App, a platform that allows users to browse, comment, and manage books, including features like a wishlist and user authentication.

Features 💡
User Authentication & Authorization:
Login/Register functionality.
Role-based access for Admin and Clients.
Book Management:
View, create, edit, and delete books (Admin-specific).
Comments on Books:
Users can add and view comments on books.
Wishlist Feature:
Add books to a personalized wishlist.
Environment Variables
To run this project, you will need to add the following environment variables to your .env file:

bash
Copy code
VITE_URL= # Backend API URL (e.g., http://localhost:8000)
Run Locally
Prerequisites
Ensure you have Node.js and npm installed.
The backend server is configured and running.
Clone the repository
bash
Copy code
git clone <repository-url>
Navigate to the frontend directory
bash
Copy code
cd frontend
Install dependencies
bash
Copy code
npm install
Start the development server
bash
Copy code
npm run dev
The frontend will run on http://localhost:5173.

Tech Stack
Frontend:

Vite + React.js: Fast and modern development environment.
React Router DOM: For dynamic routing.
Tailwind CSS: Utility-first CSS framework for styling.
Available Scripts
npm run dev
Runs the development server.
Visit http://localhost:5173 to view it in the browser.
