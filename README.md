
# Frontend for Library Management App 📚

This repository contains the frontend for the **Book Management App**, a platform that allows users to browse, comment, and manage books, including features like a wishlist and user authentication.
- Backend Repo : https://github.com/arpit7742/assignment_library_management
## Features 💡

- **User Authentication & Authorization**: 
  - Register functionality.
  - ![Screenshot 2025-01-05 030259](https://github.com/user-attachments/assets/27148e58-50a2-4b68-87a9-08020ffdc41a)
Login Functionality.
![Screenshot 2025-01-05 030248](https://github.com/user-attachments/assets/dce05c97-4b3a-411b-9b1b-1d3568a96440)
Dashboard: ![Screenshot 2025-01-05 041356](https://github.com/user-attachments/assets/47511ea9-6bb5-4fc7-bb4e-e40bceee092d)
  - Role-based access for Admin and Clients.
- **Book Management**: ![image](https://github.com/user-attachments/assets/09b1dfeb-cb32-43ae-ba99-85046e468bd1)

  - View, create, edit, and delete books (Admin-specific).

- **Comments on Books**: ![image](https://github.com/user-attachments/assets/dc52022e-ec8e-4286-ad07-25850869ce76)

  - Users can add and view comments on books.
- **Wishlist Feature**: ![image](https://github.com/user-attachments/assets/471c496c-2200-4b4e-ba51-5e5e85beb6fb)

  - Add books to a personalized wishlist.

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

```bash
VITE_URL= # Backend API URL (e.g., http://localhost:8000)
```

---

## Run Locally

### Prerequisites
- Ensure you have **Node.js** and **npm** installed.
- The backend server is configured and running.

### Clone the repository

```bash
git clone <repository-url>
```

### Navigate to the frontend directory

```bash
cd frontend
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The frontend will run on **http://localhost:5173**.

---

## Tech Stack

**Frontend:**
- **Vite + React.js**: Fast and modern development environment.
- **React Router DOM**: For dynamic routing.
- **Tailwind CSS**: Utility-first CSS framework for styling.

---

## Available Scripts

### `npm run dev`
Runs the development server.  
Visit [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build`
Builds the app for production.

### `npm run preview`
Locally serves the production build.


