# React Poster - A Modern Web Application Study

[![React](https://img.shields.io/badge/React-18.2+-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![React Router](https://img.shields.io/badge/React_Router-7.11+-CA4245?style=flat&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Vite](https://img.shields.io/badge/Vite-3.1+-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

**React Poster** is a sophisticated, full-featured blogging application built with modern React patterns. It demonstrates a complete implementation of React Router v7's data APIs (loaders & actions), modular CSS styling, and a RESTful Express.js backend—serving as an exemplary case study for developers seeking to understand contemporary React architecture and best practices.

## 📸 Project Preview

<p align="center">
  <img src="https://github.com/Figrac0/React-Poster_Refresh/blob/main/screenshots/1.png" width="625" height = "230"/>
</p>

<p align="center">
  <img src="https://github.com/Figrac0/React-Poster_Refresh/blob/main/screenshots/2.png" width="600" height = "900"/>
</p>

<p align="center">
  <img src="https://github.com/Figrac0/React-Poster_Refresh/blob/main/screenshots/3.png" width="300" height = "630"/>
</p>

##  Core Technologies

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Library & Component Architecture | 18.2.0 |
| **React Router DOM** | Client-side Routing & Data Management | 7.11.0 |
| **Vite** | Build Tool & Development Server | 3.1.0 |
| **Express.js** | REST API Backend Server | 4.18.2 |
| **React Icons** | Icon Library for UI Elements | 5.5.0 |


### Key Design Patterns

1. **Data-Driven Routing** - React Router's `loader` and `action` functions for seamless data fetching and mutations
2. **Layout Composition** - Nested route structure with `RootLayout` and `Outlet` components
3. **Modal-Based Navigation** - Dynamic overlays for post creation/details without full-page reloads
4. **CSS Modules** - Scoped, component-specific styling with modern CSS variables
5. **Separation of Concerns** - Clear division between presentation (components) and data management (loaders/actions)

## 🔧 Implementation Deep Dive

### React Router v7 Data APIs

This project exemplifies the "Data Router" paradigm introduced in React Router v6.4+, moving data fetching from components to the router configuration:

```javascript
// Route configuration with loaders and actions
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader, // Data fetched before component renders
        children: [
          {
            path: "/create-post",
            element: <NewPost />,
            action: newPostAction, // Handles form submissions
          },
          {
            path: "/:id",
            element: <PostDetails />,
            loader: PostDetailsLoader,
          },
        ],
      },
    ],
  },
]);
```

## Key Advantages:

- **Optimistic UI**: Data loading begins during navigation, not after component mount
- **Error Boundaries**: Built-in error handling for failed data fetches
- **Automatic Revalidation**: Data stays fresh without manual refresh logic
- **Progressive Enhancement**: Works without JavaScript in basic form

## Backend Architecture

The Express.js server provides a realistic REST API with essential features:

```javascript
// Backend API endpoints
app.get("/posts", async (req, res) => {
  // Returns all posts with artificial delay for realistic loading states
});

app.get("/posts/:id", async (req, res) => {
  // Individual post retrieval with proper error handling
});

app.post("/posts", async (req, res) => {
  // Post creation with automatic ID generation
  const newPost = {
    ...postData,
    id: Math.random().toString(), // Simple ID generation for demonstration
  };
});
```

## Notable Features:

- **CORS Configuration**: Proper headers for cross-origin requests during development
- **Data Persistence**: File-based storage with `getStoredPosts()` and `storePosts()` utilities
- **RESTful Design**: Clean separation of GET/POST operations
- **Error Simulation**: Commented-out delay for testing loading states

## Performance Considerations

- **Code Comments**: Extensive commented-out code showing evolution from `useState`/`useEffect` to loader/action pattern
- **Optimistic Updates**: Form submissions redirect immediately, assuming success
- **CSS Optimization**: Compact CSS with minimal repetition and efficient selectors
- **Bundle Size**: Minimal dependencies focusing on core React ecosystem
