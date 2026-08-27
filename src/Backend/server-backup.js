import dns from 'dns';

dns.setServers(['1.1.1.1']);

import 'dotenv/config';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Atlas connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err.message);
  });