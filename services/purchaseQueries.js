const sql=require('mysql');
const config=require('../config');

let result={};
const con= sql.createConnection(config);

const query=(sql)=>{
    con.query(sql,(err,res)=>{
        if(err){
            console.log(err);
        }
        else{
            result=res;
        }
    });
    return result;
}

const insert=(data)=>{
    const poDetails=data.details;
    const poItems=data.items;
    con.query('insert into podetails set ?',poDetails,(err,res,fields)=>{
        if(err)
            console.warn(err);
        else{
            for(let i=0;i<poItems.length;i++){
                let sql = `insert into po_items (po_description,amount,po_id) values(${poItems[i].po_description},${poItems[i].amount},${poItems[i].po_id})`
                con.query(sql,(err,res,fields)=>{
                    if(err){
                        console.warn(err);
                    }
                    else{
                        console.log('item inserted');
                    }
                })
            }
        }
    })
}

module.exports={query,insert};