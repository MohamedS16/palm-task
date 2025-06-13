const express = require('express');
const app = express();
const cors = require('cors');
const disbursmentsRoutes = require('./routes/disbursmentsRoutes');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());


app.use('/api/v1/disbursments',disbursmentsRoutes); 

app.listen(3000,()=>console.log(`server is running on port 3000`))