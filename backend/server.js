require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI;
const jwtSecret = process.env.JWT_SECRET;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
