import express from 'express';
import cors from 'cors';
import dns from 'dns';
import 'dotenv/config';
import mongoose from 'mongoose';
import loginRoutes from './login/login.js';
import registerRoutes from './register/register.js';

dns.setServers(['1.1.1.1']);

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', loginRoutes);
app.use('/api/auth', registerRoutes);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB Atlas connected");

    app.listen(8002, () => {
      console.log("Server running on port 8002");
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err.message);
  });