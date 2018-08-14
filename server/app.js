const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose= require('mongoose');
const cors = require('cors');


const app=express();

//allow cross-origin requests
app.use(cors());

//connecting to mLab database
mongoose.connect('mongodb://ayoub:hamaoui10@ds219832.mlab.com:19832/kickestate')
mongoose.connection.once('open',()=>{
    console.log('connected to kickstate database !!');
});


app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000,()=>{
    console.log('now lestening for request on port 4000');
});