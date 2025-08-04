# Zerodha Clone

A full-stack clone of Zerodha, India's leading stock broker platform. This project includes a modern frontend, backend API, and dashboard, built with React, Node.js, Express, and MongoDB.

## Features
- Responsive landing page and dashboard
- User signup and authentication UI
- Holdings, positions, and orders management
- Demo data for quick testing
- Modular React components
- RESTful backend API
- MongoDB integration

## Project Structure
```
frontend/      # React app for landing page and user flows
backend/       # Node.js/Express API server
backend/model/ # Mongoose models
frontend/src/  # React components
frontend/public/ # Static assets
```

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- MongoDB Atlas or local MongoDB

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/LaxitSavaliya/Trose.git
   cd Trose
   ```
2. Install dependencies:
   ```sh
   cd frontend && npm install
   cd ../backend && npm install
   ```
3. Configure environment variables:
   - Create `.env` files in `backend/` and `frontend/` as needed.
   - Example for backend:
     ```env
     MONGO_URL=your_mongodb_connection_string
     PORT=3002
     ```
4. Start the backend server:
   ```sh
   cd backend
   npm start
   ```
5. Start the frontend app:
   ```sh
   cd frontend
   npm start
   ```

## Usage
- Visit `http://localhost:3000` for the frontend.
- Backend runs on `http://localhost:3002`.
- Use provided demo endpoints to populate holdings and positions.

## Scripts
- `npm start` - Start development server
- `npm run build` - Build for production

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
This project is for educational/demo purposes only.
