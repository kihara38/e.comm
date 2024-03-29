import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import Homescreen from './screens/Homescreen';
import ProductScreen from './screens/ProductScreen';
import CartsScreen from './screens/CartsScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import ProductSaleScreen from './screens/ProductSaleScreen';

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/order/:id' element={<OrderScreen />} />
              <Route path='/shipping' element={<ShippingScreen />} />
              <Route path='/payment' element={<PaymentScreen />} />
              <Route path='/placeorder' element={<PlaceOrderScreen />} />
              <Route path='/login' element={<LoginScreen />} />
              <Route path='/register' element={<RegisterScreen />} />
              <Route path='/profile' element={<ProfileScreen />} />

              <Route path='/product/:id' element={<ProductScreen />} />
              <Route path='/cart/:id' element={<CartsScreen />} />
              <Route path='/cart' element={<CartsScreen />} />
              <Route path='/admin/userlist' element={<UserListScreen />} />
              <Route
                path='/admin/productlist'
                element={<ProductListScreen />}
                exact
              />
              <Route
                path='/admin/productsales'
                element={<ProductSaleScreen />}
                exact
              />
              <Route
                path='/admin/productlist/pageNumber'
                element={<ProductListScreen />}
                exact
              />
              <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
              <Route
                path='/admin/product/:id/edit'
                element={<ProductEditScreen />}
              />
              <Route path='/admin/orderlist' element={<OrderListScreen />} />
              <Route path='/search/:keyword' element={<Homescreen />} exact />
              <Route
                path='/search/:keyword/page/:pageNumber'
                element={<Homescreen />}
                exact
              />
              <Route path='/page/:pageNumber' element={<Homescreen />} exact />
              <Route path='/' element={<Homescreen />} exact />
            </Routes>
          </Container>
        </main>
        <Footer />
      </>
    </Router>
  );
};

export default App;
