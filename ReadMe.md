# Cat Facts Web App

This project is a web application that displays random cat facts along with an image of a cat. It consumes Express backend APIs to fetch cat facts and images. The frontend is built using React, and Material-UI is used for styling.

## Features

- Displays random cat facts obtained from the [Cat Facts API](https://catfact.ninja/fact).
- Shows an image of a cat fetched from the [Cataas API](https://cataas.com/cat).
- Dynamically updates the cat fact and image when the "Generate Cat Fact" button is clicked.
- Provides a visually appealing UI with Material-UI components and styling.
  
## Sample Endpoints

- **GET /api/cat-fact**
  - Fetches a random cat fact from the Cat Facts API.
- **GET /api/cat-pic**
  - Fetches an image of a cat from the Cataas API.

## Usage

To run the project locally:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the frontend and backend servers:
   - Frontend: `npm start` (Runs the React app on `http://localhost:3000`)
   - Backend: `npm run server` (Runs the Express server on `http://localhost:5000`)
5. Access the application in your browser at `http://localhost:3000`.

## Technologies Used

- React.js
- Express.js
- Material-UI
- Axios
- CORS
- Node.js

## Certificate Course

This project is a sample project developed as part of the MERN certificate course.