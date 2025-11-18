const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const authroutes = require('./routes/authroutes')
const approutes=require('./routes/appointmentRoutes')
//const authRoutes = require('backend\routes\authroutes.js');
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/',authroutes)
app.use('/',approutes)
//app.use('/api/auth', authRoutes);
mongoose.connect('mongodb://localhost:27017/doctor')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(2000, () => console.log(`Server running on port ${PORT}`));