const express= require('express');
const router = express.Router();

const ObjectId = require('mongoose').Types.ObjectId;

const Customer = require('../models/customer.js');

//GET API
router.get('/',(req,res)=>{
    Customer.find((err,doc)=>{
        if(err){
            console.log('Error in GET data' + err);
        }
        else{
            res.send(doc);
        }
    })
});

//GET  Single customer API
router.get('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
       Customer.findById(req.params.id, (err, doc)=>{
            if(err){
                console.log('Error in GET Customer By ID' + err);
            }
            else{
                res.send(doc);
            }
        })       
    }else{
        return res.status(400).send('No record found with id'+ req.params.id);
    }
});

//POST API
router.post('/',(req,res)=>{
    let cust =new Customer({
        name : req.body.name,
        items : req.body.items,
        price : req.body.price,
    });

    cust.save((err,doc)=>{
        if(err){
            console.log('Error in Post Data'+ err);
        }
        else{
            res.send(doc);
        }
    });
});

//PUT API
router.put('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){

        let cust ={
            name : req.body.name,
            items : req.body.items,
            price : req.body.price,
        };

       Customer.findByIdAndUpdate(req.params.id,{$set :cust},{new:true}, (err, doc)=>{
            if(err){
                console.log('Error in Update Customer By ID' + err);
            }
            else{
                res.send(doc);
            }
        })       
    }else{
        return res.status(400).send('No record found with id'+ req.params.id);
    }
});

//DELETE  API
router.delete('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
       Customer.findByIdAndRemove(req.params.id, (err, doc)=>{
            if(err){
                console.log('Error in Delete Customer By ID' + err);
            }
            else{
                res.send(doc);
            }
        })       
    }else{
        return res.status(400).send('No record found with id'+ req.params.id);
    }
});

module.exports= router;