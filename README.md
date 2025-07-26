# URL Shortener

A robust, full-stack URL shortening application built with Node.js, Express, and MongoDB. This service provides secure user authentication, URL shortening capabilities, and comprehensive analytics tracking for shortened URLs.

## 🚀 Features

### Core Functionality
- **URL Shortening**: Convert long URLs into short, manageable links
- **User Authentication**: Secure signup and login system with session management
- **Analytics Dashboard**: Track click counts and visit history for each shortened URL
- **User-Specific URLs**: Each user can only view and manage their own shortened URLs
- **Real-time Redirects**: Instant redirection from short URLs to original destinations

### Security & Performance
- **Session-based Authentication**: Secure user sessions using UUID tokens
- **Input Validation**: Comprehensive validation for URLs and user inputs
- **Database Indexing**: Optimized MongoDB queries with proper indexing
- **Error Handling**: Graceful error handling with user-friendly messages

## 🛠 Tech Stack

### Backend
- **Node.js** (v22.13.1) - Runtime environment
- **Express.js** (v4.21.2) - Web application framework
- **MongoDB** (v8.12.1) - NoSQL database with Mongoose ODM
- **EJS** (v3.1.10) - Template engine for server-side rendering

### Authentication & Utilities
- **Cookie Parser** (v1.4.7) - Session management
- **UUID** (v11.1.0) - Unique identifier generation
- **ShortID** (v2.2.17) - URL shortening algorithm
- **Nodemon** (v3.1.9) - Development server with auto-restart

### Architecture
- **MVC Pattern**: Model-View-Controller architecture
- **Middleware-based**: Custom authentication and authorization middleware
- **RESTful API**: Clean API design with proper HTTP methods

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (v4.4 or higher)
- Git

### Quick Start

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd url-shortener
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Database Setup**
   - Ensure MongoDB is running on `localhost:27017`
   - The application will automatically create the `short-url` database
   - Collections (`users`, `urls`) will be created automatically

4. **Environment Configuration**
   - Default port: `8000`
   - MongoDB connection: `mongodb://localhost:27017/short-url`
   - No additional environment variables required for development

5. **Start the Application**
   ```bash
   npm start
   ```
   The server will start on `http://localhost:8000`

### Development Workflow
- **Auto-restart**: Nodemon automatically restarts the server on file changes
- **Database**: MongoDB connection with automatic error handling
- **Logging**: Console logs for debugging and monitoring
<br> <br><br>
## 🚀 About Me

Hi! I’m a 2nd‑year B.Tech CSE student who builds simple, impactful full‑stack tools. I’ve completed the MERN stack, competed in hackathons, and handled everything from React UIs to backend APIs and databases. Now sharpening my DSA skills and exploring AI‑powered workflows. Always improving, always learning!

# Hi, I'm Khizar Hayath! 👋

## 🔗 Links

[![GitHub](https://img.shields.io/badge/github-khizarhayath-181717?style=for-the-badge&logo=github)](https://github.com/Khizar-hayath)<br>
[![LinkedIn](https://img.shields.io/badge/linkedin-Khizar_Hayath-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/khizarhayath)

---

## 🛠 Skills

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)
![C++](https://img.shields.io/badge/C++-00599C?style=flat&logo=c%2B%2B&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=github&logoColor=white)
![VS_Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat&logo=visual-studio-code&logoColor=white) <br>
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-010101?style=flat&logoColor=white)

---

**Built with ❤️ using Node.js and Express** 
