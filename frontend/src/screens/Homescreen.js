import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'

import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'


const Homescreen = () => {
  const dispatch=useDispatch()

  const productList=useSelector(state=>state.productList)
  const {loading, error, Products}=productList

  useEffect(()=>{
    dispatch(listProducts())
  },[dispatch])
  
  return (
   <> 
    <h1>Latest Products</h1>
    {loading?(<Loader/>):error ? (<Message variant='danger'>{error}</Message>):(
    <Row>
     {Products.map(product=>(
       <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
        <Product product={product}/>
       </Col>
     ))}
    </Row>
    )}
    </>
  )
}

export default Homescreen