require('./models/User');
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri = 'mongodb+srv://usr:usrmongo@trackcluster.cyfj7ak.mongodb.net/'

mongoose.connect(mongoUri);

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('Error on Connecting MongoDB', err);
});

app.get('/', (req, res) => {
    res.send('Hi There!!');
});

app.listen(3000, () => {
    console.log('Listen on port 3000');
});
