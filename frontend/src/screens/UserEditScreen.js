import React,{useState,useEffect} from 'react'
import {useParams,useLocation,useNavigate,Link} from 'react-router-dom'
import {Form, Button,} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {getUserDetails} from '../actions/userActions'
const UserEditScreen = () => {
 const location = useLocation();
 const history=useNavigate()
 const {id}=useParams()
 const userId=id
  const [name, setName]=useState('')
  const [email, setEmail]=useState('')
  const [isAdmin, setIsAdmin]=useState(false)

  const dispatch=useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  // const userLogin = useSelector((state) => state.userLogin)
  // const { loading, error, userInfo } = userLogin

  const userUpdate = useSelector((state) => state.userUpdate)
  const { loading:loadingUpdate, error:errorUpdate, success:successUpdate } = userUpdate
  
  

  

  useEffect(()=>{
    if(!user.name || user._id !==userId){
     dispatch(getUserDetails(userId))
    }else{
     setName(user.name)
     setEmail(user.email)
     setIsAdmin(user.isAdmin)
    }
  },[dispatch,userId,user])
  
  const submitHandler=(e)=>{
   e.preventDefault();
  }
  return (
   <>
   <Link to='/admin/userlist' className='btn btn-light my-3'>
    Go Back
   </Link>
   <FormContainer>
     <h1>Edit User</h1>
     {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
       <Form onSubmit={submitHandler}>
       <Form.Group controlId='name'>
        <Form.Label>Name</Form.Label>
        <Form.Control 
          type='name'
          placeholder='Enter Name'
          value={name}
          onChange={(e)=>setName(e.target.value)}>
        </Form.Control>
       </Form.Group>
       <Form.Group controlId='email'>
        <Form.Label>Email Address</Form.Label>
        <Form.Control 
          type='email'
          placeholder='Enter Email'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}>
        </Form.Control>
       </Form.Group>
       <Form.Group controlId='isadmin'>
        
        <Form.Check 
          type='checkbox'
          label='is Admin'
          checked={isAdmin}
          onChange={(e)=>setIsAdmin(e.target.checked)}>
        </Form.Check>
       </Form.Group>
       
       <Button type='submit' variant='primary'>Update</Button>
      
      </Form>
     )}
     
    </FormContainer>
   </>
    
  )
}

export default UserEditScreen