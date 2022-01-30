const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

const bookRouter = require('./routes/api/books.js');

const app = express();

var bodyParser = require('body-parser');

// parse application/json
app.use(bodyParser.json())

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// use Routes
app.use('/api/books', bookRouter);

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));