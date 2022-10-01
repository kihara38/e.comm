import {BrowserRouter as  Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Container} from 'react-bootstrap';
import Homescreen from "./screens/Homescreen";
import ProductScreen from './screens/ProductScreen';
import CartsScreen from './screens/CartsScreen';
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';



const App=()=> {
  return (
    <Router> 
    <>
    <Header/>
    <main className="py-3">
      <Container>
        <Routes>
        <Route path="/login" element={<LoginScreen/>}/>
        <Route path="/register" element={<RegisterScreen/>}/>
        <Route path="/profile" element={<ProfileScreen/>}/>
        <Route path='/' element={<Homescreen/>} exact />
        <Route path='/product/:id' element={<ProductScreen/>}/>
        <Route path="/cart/">
        <Route path=":id" element={<CartsScreen />} />
        <Route path=" " element={<CartsScreen />} />
        </Route>
        
        
        
        </Routes>
      </Container>
      
    </main>
    <Footer/>
    </>
    </Router>
  );
}

export default App;
