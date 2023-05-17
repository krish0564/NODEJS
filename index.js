
// Entry Point of Api

const express = require('express');
const service= require('./services/purchaseQueries');
const app = express();
const port =  9000;
const cors=require('cors');
app.use(express.json());

app.use(cors({
    origin:'http://localhost:3000'
}));

// To get items

/*app.get('',(req,res)=>{
    const data=service.query('select * from po');
    res.send(data);
});*/

// To post details

app.post('/poDetails',(req,res)=>{
    data=req.body;
    service.insert(data);
    res.send('inserted');
});


app.listen(port, () => console.log(`App Running on port ${port}!`))