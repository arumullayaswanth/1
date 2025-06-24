



const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// Add a health check route
app.get('/status', (req, res) => {
  console.log('✅ /status endpoint was called');
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

