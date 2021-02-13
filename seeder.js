const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Load models
const Medicine = require('./models/Medicine');
const Prescription = require('./models/Prescription');
const MedicineDosage = require('./models/MedicineDosage');

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Read JSON files
const medicines = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/medicines.json`, 'utf-8')
);

const prescriptions = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/prescriptions.json`, 'utf-8')
);

const medicineDosages = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/medicine_dosage.json`, 'utf-8')
);

// Import into DB
const importData = async () => {
  try {
    await Medicine.create(medicines);
    await Prescription.create(prescriptions);
    await MedicineDosage.create(medicineDosages);

    console.log('Data Imported...');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await Medicine.deleteMany();
    await Prescription.deleteMany();
    await MedicineDosage.deleteMany();

    console.log('Data Destroyed...');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
