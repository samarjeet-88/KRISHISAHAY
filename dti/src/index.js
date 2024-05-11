import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Component/Login/Login';
import Layout from './Layout.jsx'
import Sign from './Component/Sign/Sign.jsx';
import Logout from './Component/Logout/Logout.jsx';
import About from './Component/About/About.jsx';
import Acknowledgement from './Component/Acknowledgement/Acknowledgement.jsx';
// import Navbar from './Component/ShopListing/Navbar.jsx';
import Header from './Component/Header/Header.jsx';
import LISTSTOREBUTTON from './Component/ShopListing/ListStoreButton.jsx';
import LayoutMyShop from './Layout_MyShop.jsx';
// import StoreDetail from './Component/MyStore/StoreDetail.jsx';
import LayoutSpecificStore from './LayoutSpecificStore.jsx';
import AddItems from './Component/SpecificStore/AddItemsSpecificStore.jsx';
import LayoutBuyItems from './LayoutBuyItems.jsx';
import CartComponent from './Component/BuyingItems/CartContent.jsx';
import LayoutWeather from './LayoutWeather.js';
import LayoutSoilHealth from './LayoutSoilHealth.jsx';
import IndiaInteractiveSVGMap from './Component/soil-health/SoilHealth.jsx';
import ImagePage from './Component/soil-health/SoilHealthCard.jsx';
import LayoutCart from './LayoutCart.jsx';
import PaymentSuccessful from './Component/BuyingItems/PaymentSuccessful.jsx';
import LayoutCompare from './LayoutCompare.jsx';
import LayoutRental from './LayoutRental.jsx';
import LayoutTractor from './LayoutTractor.jsx';
import LayoutTthreshers from './LayoutThreshers.jsx';
import LayoutSprayers from './LayoutSprayer.jsx';
// import MyStore from './Component/MyStore/MyStore.jsx';




const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/sign',
    element: <Sign />
  },
  {
    path: '/logout',
    element: <Logout />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/acknowledgement',
    element: <Acknowledgement />
  },
  {
    path: '/shoplisting',
    element: <Layout />
  },
  {
    path: '/liststorebutton',
    element: <LISTSTOREBUTTON />
  },
  {
    path: '/mystore',
    element: <LayoutMyShop />
  },
  {
    path: '/store/:id',
    element: <LayoutSpecificStore />
  },
  {
    path: '/additems',
    element: <AddItems />
  },
  {
    path: '/shoplisting/:id',
    element: <LayoutBuyItems />
  },
  {
    path: '/cart',
    element: <LayoutCart />
  },
  {
    path: '/weather',
    element: <LayoutWeather />
  },
  {
    path: '/soilhealth',
    element: <LayoutSoilHealth />
  },
  {
    path: '/state-image/:id',
    element: <ImagePage />
  },
  {
    path: '/paymentsuccess',
    element: <PaymentSuccessful />
  },
  {

    path: '/compare',
    element: <LayoutCompare />
  },
  {
    path: '/rental',
    element: <LayoutRental />
  },
  {
    path: '/tractor',
    element: <LayoutTractor />
  },
  {
    path: '/threshers',
    element: <LayoutTthreshers />
  },
  {
    path: "/sprayer",
    element: <LayoutSprayers />
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
