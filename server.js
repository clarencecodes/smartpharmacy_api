const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const firebaseAdmin = require('firebase-admin');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// Route files
const prescriptions = require('./routes/prescriptions');
const medicines = require('./routes/medicines');
const medicineDosages = require('./routes/medicineDosages');
const auth = require('./routes/auth');
const pdf = require('./routes/filePdf');

const app = express();

// Set static folder
app.use(express.static('public'));

// CORS middleware
app.use(cors());

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Initialize firebase
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(
    JSON.parse(process.env.FIREBASE_CREDENTIALS)
  ),
});

// Mount routers
app.use('/api/v1/prescriptions', prescriptions);
app.use('/api/v1/medicines', medicines);
app.use('/api/v1/medicineDosages', medicineDosages);
app.use('/api/v1/auth', auth);
app.use('/api/v1/pdf', pdf);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
