const express = require('express');
const app = express();
require('dotenv').config();
require('./config/db.config');

app.use(express.json())


const authRoutes = require('./routes/auth.routes');
app.use('/auth', authRoutes)

const userRoutes = require('./routes/user.routes');
app.use('/user',userRoutes);

const followRoutes = require('./routes/followCompany.routes');
app.use('/follow',followRoutes);


//server
app.listen(process.env.PORT, (err)=>{
    if(err) throw err;
    console.log(`server running on port ${process.env.PORT}`);
})