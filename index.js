// This index.js file is just going to be the setup for the server 
import express from 'express';
import bodyParser from 'body-parser'; // This allows us to take in incoming POST request bodies

import usersRoutes from './routes/user.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json()); // bodyParser Middleware

app.use('/users', usersRoutes);

app.listen(PORT, () => console.log(`Server running on PORT: http://localhost:${PORT}`));