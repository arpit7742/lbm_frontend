
# Frontend for Book Management App 📚

This repository contains the frontend for the **Book Management App**, a platform that allows users to browse, comment, and manage books, including features like a wishlist and user authentication.

## Features 💡

- **User Authentication & Authorization**: 
  - Login/Register functionality.
  - Role-based access for Admin and Clients.
- **Book Management**: 
  - View, create, edit, and delete books (Admin-specific).
- **Comments on Books**: 
  - Users can add and view comments on books.
- **Wishlist Feature**: 
  - Add books to a personalized wishlist.

---

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

---

## Features in Progress 🚧
- Dark mode support.
- Enhanced accessibility (ARIA attributes).
- More detailed user analytics for Admins.

---

## Feedback & Contributions

We’d love your feedback and contributions! Please feel free to fork this repository and make a pull request for any bug fixes, enhancements, or new features.
