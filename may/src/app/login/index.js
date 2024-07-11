const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/updateEmp', (req, res) => {
  // Your logic to handle the request
  res.send('Employee updated');
});

app.listen(8080, () => {
  console.log('Server running on port 8080');
});
