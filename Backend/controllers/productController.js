import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

//@desc fetch all product
//@route GET /api/produts
//@access Public
const getProducts=asyncHandler(async(req, res)=>{
 const products=await Product.find({})

 res.json(products)
})

//@desc fetch single product
//@route GET /api/produts/:id
//@access Public
const getProductById=asyncHandler(async(req, res)=>{
 const product= await Product.findById(req.params.id)

 if(product){
  res.json(product)
 }else{
  res.status(404)
  throw new Error('product not found')
 }

})

//@desc Delete a product
//@route DELETE /api/produts/:id
//@access Private/admin
const deleteProduct=asyncHandler(async(req, res)=>{
 const product= await Product.findById(req.params.id)

 if(product){
  await Product.deleteOne()
  res.json({message:'Product Removed'})
 }else{
  res.status(404)
  throw new Error('product not found')
 }

})

//@desc create a product
//@route post /api/produts
//@access Private/admin
const createProduct=asyncHandler(async(req, res)=>{
  const product= new Product({
   name:'sample name',
   price:0,
   user:req.user._id,
   image:'/images/sample.jpg',
   brand:'sample brand', 
   category:'sample category',
   countInStock:0,
   numReviews:0,
   description:'sample description'
  })

  const createdProduct=await product.save()
  res.status(201).json(createdProduct)
})

//@desc update a product
//@route put /api/products/:id
//@access Private/admin
const updateProduct=asyncHandler(async(req, res)=>{
  const {name,price,description,image,brand,category,countInStock}=req.body
  const product=await Product.findById(req.params.id)

  if(product){

    product.name=name
    product.price=price
    product.description=description
    product.image=image
    product.brand=brand
    product.category=category
    product.countInStock=countInStock

   const updatedProduct=await product.save()
   res.status(201)
   res.json(updatedProduct)
  }else{
   res.status(404)
   throw new Error('product not found')
  }

  
})

export {
 getProductById,
 getProducts,
 deleteProduct,
 createProduct,
 updateProduct
}