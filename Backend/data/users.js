import bcrypt from 'bcryptjs'
const users=[
 {
  name:'Admin User',
  email:'admin@example.com',
  password:bcrypt.hashSync('123456',10),
  isAdmin:true
 },
 { 
  name:'Nelki kihara',
  email:'nelki@example.com',
  password:bcrypt.hashSync('123456',10),
 },
 {
  name:'Ann kihara',
  email:'kihara@example.com',
  password:bcrypt.hashSync('123456',10),
 }
]

export default users