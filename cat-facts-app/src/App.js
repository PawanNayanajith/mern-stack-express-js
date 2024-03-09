import React, { useState } from 'react';
import { Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import './App.css';

function App() {
  const [catFact, setCatFact] = useState('');
  const [catGif, setCatGif] = useState('');
  const [textColor, setTextColor] = useState('#000');
  const [loading, setLoading] = useState(false);
  const [gifError, setGifError] = useState(false);

  const fetchCatFact = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/cat-fact');
      if (!response.ok) {
        throw new Error('Failed to fetch cat fact');
      }
      const data = await response.json();
      setCatFact(data.fact);
      setTextColor(getRandomColor());
    } catch (error) {
      console.error('Error fetching cat fact:', error);
    }
  };

  const fetchCatGif = async () => {
    console.log("Start Fetching cat gif..");
    setLoading(true);
    try {
      setGifError(false);
      const response = await fetch('http://localhost:5000/api/cat-pic');
      if (!response.ok) {
        throw new Error('Failed to fetch cat pic');
      }
      const data = await response.blob();
      const imageUrl = URL.createObjectURL(data);
      setCatGif(imageUrl);
    } catch (error) {
      console.error('Error fetching cat pic:', error);
      setGifError(true);
    } finally {
      setLoading(false);
    }
    console.log("End Fetching cat gif..");
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <Container maxWidth="sm" className="App">
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Cat Facts
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className="cat-gif-container">
            {loading && <CircularProgress />}
            {!loading && catGif && !gifError && (
              <img
                src={catGif}
                alt="Random Cat GIF"
                className="cat-gif"
                style={{ width: '300px', height: '300px', border: '2px solid #000' }} // Fixed size and border styling
              />
            )}
          </div>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="body1" component="p" style={{ color: textColor }}>
                {catFact || 'Click the button to generate a cat fact!'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={() => { fetchCatGif(); fetchCatFact(); }} fullWidth>
            Generate Cat Fact
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
