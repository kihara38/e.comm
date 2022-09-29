import {BrowserRouter as  Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Container} from 'react-bootstrap';
import Homescreen from "./screens/Homescreen";
import ProductScreen from './screens/ProductScreen';
import CartsScreen from './screens/CartsScreen';



const App=()=> {
  return (
    <Router> 
    <>
    <Header/>
    <main className="py-3">
      <Container>
        <Routes>
        <Route path='/' element={<Homescreen/>} exact />
        <Route path='/product/:id' element={<ProductScreen/>}/>
        {/* <Route path='/cart/:id' element={<CartsScreen/>}/> */}
        <Route path="/cart/">
        <Route path=":id" element={<CartsScreen />} />
        <Route path="" element={<CartsScreen />} />
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
