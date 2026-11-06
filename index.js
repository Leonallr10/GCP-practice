const express = require('express');

const app = express();
// Cloud Run injects PORT (default 8080). Fallback to 8080 locally.
const PORT = process.env.PORT || 8080;

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
