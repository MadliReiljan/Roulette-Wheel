const express = require('express');
const bodyParser = require('body-parser');
const wheelRoutes = require('./routes/wheelRoutes');
const { connectDB } = require('./database/connection');

const app = express();
const PORT = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/wheel', wheelRoutes);

n
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});
