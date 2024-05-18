// src/App.js

import React, {useState, useEffect} from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navigation from './customer/Components/Navbar/Navigation';
import Homepage from './Pages/Homepage';
import AdminPannel from './Admin/AdminPannel';
import NotFound from './Pages/Notfound';
import { ThemeProvider } from '@mui/material/styles';
import { customTheme } from './Admin/them/customeThem';
import ProductDetails from './customer/Components/Product/ProductDetails/ProductDetails';
import Product from './customer/Components/Product/Product/Product';
import Contact from './Pages/Contact';
import TearmsCondition from './Pages/TearmsCondition';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import About from './Pages/About';
import Cart from './customer/Components/Cart/Cart';
import Order from './customer/Components/orders/Order';
import OrderDetails from './customer/Components/orders/OrderDetails';
import Checkout from './customer/Components/Checkout/Checkout';
import Footer from './customer/Components/footer/Footer';
import PaymentSuccess from './customer/Components/paymentSuccess/PaymentSuccess';
import RateProduct from './customer/Components/ReviewProduct/RateProduct';
import axios from 'axios';
// Import HomepageABTestingToggle component from the Admin section
import HomepageABTestingToggle from './Admin/componets/ABTesting/ABTesting';

function App() {
  const isAdmin = true;
  const location = useLocation();
  const showHomepageABTestingToggle = location.pathname.startsWith('/admin');
  const [useExperimentalUI, setUseExperimentalUI] = useState(true);
 // const showHomepageABTestingToggle = location.pathname.startsWith('/admin');
 useEffect(() => {
  axios.get('http://localhost:5454/api/abtesting/experimental-ui')
      .then(response => setUseExperimentalUI(response.data.useExperimentalUI))
      .catch(error => console.error('Error fetching A/B testing status:', error));
}, []);
  const toggleExperiementalUI = () => {
      if(useExperimentalUI === true){
          setUseExperimentalUI(false);
      }
      else{
          setUseExperimentalUI(true);
      }
  }

  return (
    <ThemeProvider theme={customTheme}>
      <div className="">
        <Navigation useExperimentalUI={useExperimentalUI}  />
        {showHomepageABTestingToggle && <HomepageABTestingToggle  />}
        <Routes>
          <Route path="/" element={<Homepage useExperimentalUI={useExperimentalUI}/>} />
          <Route path="/admin/*" element={<AdminPannel />} />
          <Route path="/login" element={<Homepage useExperimentalUI={useExperimentalUI}/>} />
          <Route path="/register" element={<Homepage useExperimentalUI={useExperimentalUI}/>} />
          <Route path="/home" element={<Homepage useExperimentalUI={useExperimentalUI}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-condition" element={<TearmsCondition />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account/order" element={<Order />} />
          <Route path="/account/order/:orderId" element={<OrderDetails />} />
          <Route path="/account/rate/:productId" element={<RateProduct />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment/:orderId" element={<PaymentSuccess />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
