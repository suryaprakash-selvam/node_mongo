const express = require('express')
const router= express.Router()
const product =  require('../models/products')

router.get('/', async(req,res)=>{
    console.log('data is called')
    try{
       const allProduct= await product.find()
       res.json(allProduct)
    }catch(err){
        res.send('error' , err)
    }

})

router.post('/',async(req,res) =>{
  const addprod=new product({
    productName: req.body.pname,
    productid: req.body.id,
    productPrice: req.body.price 
  })
  try{
    const result = await addprod.save()
    res.json(result)
  }catch(err){
      res.send('error')
  }
})


router.patch('/:id',async(req,res) =>{
  const addprod=new product.findByproductid(req.params.id)
  addprod.productPrice =req.body.productPrice
  try{
    const result = await addprod.save()
    res.json(result)
  }catch(err){
      res.send('error')
  }
})
module.exports=router
