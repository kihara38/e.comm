import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {saveShippingAddress} from '../actions/cartActions'

import FormContainer from '../components/FormContainer'
import CheckOutSteps from '../components/CheckOutSteps'
const ShippingScreen = () => {

  const history=useNavigate()

  const Cart=useSelector(state=>state.cart)
  const{shippingAddress}=Cart

  console.log(shippingAddress)

  const [address, setAddress]=useState(shippingAddress.address)
  const [city, setCity]=useState(shippingAddress.city)
  const [postalCode, setPostalCode]=useState(shippingAddress.postalCode)
  const [country, setCountry]=useState(shippingAddress.country)

  const dispatch=useDispatch()

  const submitHandler=(e)=>{
    e.preventDefault();
    dispatch(saveShippingAddress({address,city,postalCode,country}))
    history('/payment')
  }
  return (
    <FormContainer>
      <CheckOutSteps step1 step2/>
     <h1>Shipping</h1>
     <Form onSubmit={submitHandler}>
     <Form.Group controlId='address'>
       <Form.Label>Address</Form.Label>
       <Form.Control 
         type='text'
         placeholder='Enter address'
         value={address}
         required
         onChange={(e)=>setAddress(e.target.value)}>
       </Form.Control>
      </Form.Group>

     <Form.Group controlId='city'>
       <Form.Label>City</Form.Label>
       <Form.Control 
         type='text'
         placeholder='Enter city'
         value={city}
         required
         onChange={(e)=>setCity(e.target.value)}>
       </Form.Control>
      </Form.Group>

     <Form.Group controlId='postalCode'>
       <Form.Label>PostalCode</Form.Label>
       <Form.Control 
         type='text'
         placeholder='Enter postalCode'
         value={postalCode}
         required
         onChange={(e)=>setPostalCode(e.target.value)}>
       </Form.Control>
      </Form.Group>

     <Form.Group controlId='country'>
       <Form.Label>Country</Form.Label>
       <Form.Control 
         type='text'
         placeholder='Enter contry'
         value={country}
         required
         onChange={(e)=>setCountry(e.target.value)}>
       </Form.Control>
      </Form.Group>

      <Button type='submit' variant='primary'>
       Continue...
       </Button>

     </Form>
    </FormContainer>
  )
}

export default ShippingScreen