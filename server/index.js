import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();



app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({  extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
const CONNECTION_URL = ('mongodb+srv://asmasimreen:simmu1234@cluster0.uockj.mongodb.net/finalProject?retryWrites=true&w=majority');
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
mongoose.set('useFindAndModify', false);