const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors()); // Enable CORS

app.get('/api/cat-fact', async (req, res) => {
  try {
    const { data } = await axios.get('https://catfact.ninja/fact');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/cat-pic', async (req, res) => {
  try {
    const response = await axios.get('https://cataas.com/cat', {
      responseType: 'stream' // Fetch image as stream
    });
    res.set('Content-Type', response.headers['content-type']); // Set content type based on response
    response.data.pipe(res); // Pipe image data directly to the response
  } catch (error) {
    console.error('Error fetching cat GIF:', error);
    res.status(500).json({ error: 'Failed to fetch cat GIF' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
