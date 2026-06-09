# 🎥 TubeFree Frontend

<div align="center">

![React](https://img.shields.io/badge/React-Frontend-blue?style=for-the-badge&logo=react)
![Redux](https://img.shields.io/badge/Redux-Toolkit-purple?style=for-the-badge&logo=redux)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styling-38BDF8?style=for-the-badge&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-yellow?style=for-the-badge&logo=vite)
![Axios](https://img.shields.io/badge/Axios-API%20Client-blue?style=for-the-badge)

A modern video-sharing platform inspired by YouTube and social media applications, built with React, Redux Toolkit, Tailwind CSS, and Vite.

</div>

---

# 📖 Overview

TubeFree Frontend provides a seamless and responsive user experience for a video-sharing platform where users can:

- Watch videos
- Upload content
- Manage channels
- Create playlists
- Like and comment on videos
- Subscribe to creators
- Post community updates
- Track watch history
- Access creator dashboards

The application follows modern React development practices with reusable components, centralized state management, protected routes, and responsive design.

---

# ✨ Features

## 🎬 Video Platform

- Browse Videos
- Watch Videos
- Video Details Page
- Responsive Video Player
- Video Search
- Related Videos
- Channel Navigation

---

## 👤 User Authentication

- User Registration
- User Login
- Persistent Authentication
- Protected Routes
- Session Management
- Logout Functionality

---

## 📺 Channel Management

- View User Channels
- Channel Profile
- Subscriber Information
- Uploaded Videos
- Channel Statistics

---

## ❤️ Engagement Features

- Like Videos
- Like Tweets
- Subscribe to Channels
- User Interactions
- Community Engagement

---

## 💬 Comments

- Add Comments
- Update Comments
- Delete Comments
- View Comment Threads

---

## 📂 Playlist System

- Create Playlist
- Edit Playlist
- Delete Playlist
- Add Videos
- Remove Videos
- View Playlist Content

---

## 🐦 Community Posts (Tweets)

- Create Posts
- Edit Posts
- Delete Posts
- View Community Feed

---

## 📜 User Activity

- Watch History
- Liked Videos
- Subscribed Channels
- User Dashboard

---

## 📊 Creator Dashboard

- Channel Analytics
- Video Statistics
- Subscriber Metrics
- Content Management

---

# 🏗️ Application Architecture

```text
User Interface
      │
      ▼
React Components
      │
      ▼
Redux Toolkit Store
      │
      ▼
Axios API Layer
      │
      ▼
Backend REST API
      │
      ▼
MongoDB Database
```

---

# 🛠️ Tech Stack

## Frontend Framework

- React.js
- Vite

## State Management

- Redux Toolkit
- React Redux

## Routing

- React Router DOM

## Forms

- React Hook Form

## API Communication

- Axios

## Styling

- Tailwind CSS

## Notifications

- React Toastify

## Media Handling

- Video.js

---

# 📂 Project Structure

```bash
src
│
├── app
│   ├── store.js
│   └── Slice
│
├── components
│   ├── Navbar
│   ├── Sidebar
│   ├── VideoCard
│   ├── Playlist
│   ├── Comments
│   └── Shared Components
│
├── pages
│   ├── Home
│   ├── Login
│   ├── Signup
│   ├── VideoDetails
│   ├── Channel
│   ├── Dashboard
│   ├── Playlist
│   └── History
│
├── services
│
├── assets
│
├── hooks
│
├── App.jsx
└── main.jsx
```

---

# 🚀 Key Pages

| Page | Description |
|--------|-------------|
| Home | Video Feed |
| Login | User Authentication |
| Signup | User Registration |
| Video Details | Video Playback & Comments |
| Channel | Creator Profile |
| Playlist | Playlist Management |
| Dashboard | Creator Analytics |
| Tweets | Community Feed |
| History | Watch History |
| Liked Videos | Saved Content |

---

# 🔄 State Management

Redux Toolkit is used to manage:

- Authentication State
- User Data
- Videos
- Comments
- Likes
- Playlists
- Subscriptions
- Dashboard Data
- Loading States
- Error Handling

---

# 🔐 Authentication Flow

```text
User Login
      │
      ▼
Backend Authentication
      │
      ▼
JWT Token Received
      │
      ▼
Redux Store Updated
      │
      ▼
Protected Routes Enabled
```

---

# ⚙️ Environment Variables

Create a `.env` file:

```env
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

---

# 📥 Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/tubefree-frontend.git
```

## Navigate to Project

```bash
cd tubefree-frontend
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

Application will run on:

```bash
http://localhost:5173
```

---

# 🏃 Build for Production

```bash
npm run build
```

---

# 👀 Preview Production Build

```bash
npm run preview
```

---

# 📱 Responsive Design

The application is fully responsive and optimized for:

- Desktop
- Laptop
- Tablet
- Mobile Devices

---

# 🎨 UI Highlights

- Modern Design System
- Responsive Layout
- Reusable Components
- Clean Navigation
- Optimized User Experience
- Fast Loading Interface

---

# 📸 Screenshots

## Home Page

```md
![Home](./screenshots/home.png)
```

## Video Player

```md
![Video](./screenshots/video-player.png)
```

## Dashboard

```md
![Dashboard](./screenshots/dashboard.png)
```

---

# 🌟 Future Enhancements

- Dark Mode
- Live Streaming Interface
- Real-Time Notifications
- Infinite Scroll
- Video Recommendations
- AI-Based Search
- Progressive Web App (PWA)
- Offline Support

---

# 🔗 Backend Repository

This frontend works with the TubeFree Backend API.

```text
Backend Repository Link Here
```

---

# 🤝 Contributing

Contributions are welcome.

Feel free to:

- Fork the repository
- Create a feature branch
- Submit a pull request

---

# 👨‍💻 Author

### Yash Saharan

Computer Science Student | MERN Stack Developer | Full Stack Developer

---

# ⭐ Support

If you found this project useful:

⭐ Star the repository

🍴 Fork the repository

🛠️ Contribute to the project

---

<div align="center">

Made with ❤️ using React, Redux Toolkit, Tailwind CSS and Vite

</div>
