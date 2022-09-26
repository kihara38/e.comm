import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'


const Homescreen = () => {
  const [Products, setProducts]=useState([])

  useEffect(()=>{
    const fetchProducts= async ()=>{
      const {data}=await axios.get('/api/Products')

      setProducts(data)
    }
    fetchProducts()
  },[])
  return (
   <> 
    <h1>Latest Products</h1>
    <Row>
     {Products.map(product=>(
       <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
        <Product product={product}/>
       </Col>
     ))}
    </Row>
    </>
  )
}

export default Homescreen