const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const wheelRoutes = require('./routes/wheelRoutes')
const app = express();

dotenv.config();  

app.use(cors());  
app.use(express.json());  

app.use('/api', wheelRoutes);  

const PORT = 5000;


mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
