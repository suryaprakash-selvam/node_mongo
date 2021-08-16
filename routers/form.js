
const express = require('express')
const router= express.Router()
const feild =require('../models/field')

router.get('/', async(req,res)=>{
    console.log('data is called')
    try{
        
       const allfeild= await feild.find()
       res.json(allfeild)
    }catch(err){
        res.send('error' , err)
    }
})
git config --global user.email "selvamssp206@gmail.com"
git config --global user.name "surya"

router.post('/',async(req,res) =>{
  const addfeild=new feild(
    {
        Name          :req.body.Name,
        StreetAddress :req.body.StreetAddress,
        Province      :req.body.Province,
        Country       :req.body.Country,
        postalCode    :req.body.postalCode,
        Product       :req.body.Product,
        product2      :req.body.product2,
        product3      :req.body.product3,
        deliveryTime  :req.body.deliveryTime      
    }
  )

  console.log("checking "+addfeild);
  try{
      const result = await addfeild.save()
    res.json(result)
  }catch(err){
      res.send('error'+err)
  }
})


module.exports=router