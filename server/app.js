
const express=require('express');
const graphqlHTTP=require('express-graphql');
const schema = require("./schema/schema");
const mongoose=require('mongoose');
const cors = require('cors');

const app = express();

//allow ross origin request
app.use(cors());

mongoose.connect('mongodb://localhost:27017/shub-lib', {useNewUrlParser: true});
mongoose.connection.once('open', () => {
    console.log("connected to database...");
})
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));
app.listen(4000,()=>{
    console.log("listening at 4000 port..");
});

