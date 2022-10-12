import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useParams,Link} from 'react-router-dom'
import Meta from '../components/Meta'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'


const Homescreen = () => {
  const dispatch=useDispatch()
  const {keyword}=useParams()
  const {pageNumber}=useParams() ||1

  const productList=useSelector(state=>state.productList)
  const {loading, error, Products,pages,page}=productList

  useEffect(()=>{
    dispatch(listProducts(keyword,pageNumber))
  },[dispatch,keyword,pageNumber])
  
  return (
   <>  
   <Meta/>
   {!keyword ? <ProductCarousel/> : <Link to='/'  className='btn btn-light'>Go Back</Link>}
    <h1>Latest Products</h1>
    {loading?(<Loader/>):error ? (<Message variant='danger'>{error}</Message>):(
      <>
    <Row>
     {Products.map(product=>(
       <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
        <Product product={product}/>
       </Col>
     ))}
    </Row>
    <Paginate pages={pages} page={page} keyword={keyword ? keyword:''} />
    </>
    )}
    </>
  )
}

export default Homescreen