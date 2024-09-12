import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import ProductCard from './Productcard'; // Ensure correct casing
import Manufactures from './Manufactures';
import Signin from './Signin';
import SignUpPageM from './SignUpPageM';
import SignUpPageB from './SignUpPageB';
import ForgotPasswordPage from './ForgotPasswordPage';
// import Bag from './Bag'; // Uncomment if needed
import Maizgrinding from './Maizgrinding'; 
import Glasscutter from './Glasscutter'; 
import Feedextruder from './Feedextruder'; 
import Wheatgrinder from './Wheatgrinder'; 
import Livestockfeed from './Livestockfeed'; // Removed extra space
import Fishmeal from './Fishmeal';
import Animalfeedsuplier from './Animalfeedsuplier';
import OfferPage from './OfferPage';
import SellerSelfRegistration from './SellerSelfRegistration';
import SellOnMetaMarket from './SellOnMetaMarket';
import ManagementVendorApproval from './ManagementVendorApproval';
import ProductMangPageuser from './ProductMangPageuser';
import AdminDashboard from './AdminDashboard';
import CommissionCalculation from './CommissionCalculation';

import Sofaset from './Sofaset';
import Buynowpage from './Buynowpage';
import Cartpage from './Cartpage';
import Airpodmax from './Airpodmax';
import Dinningtable from './Dinningtable';
import Wadrobe from './Wadrobe';
import Chair from './Chair';
import Bed from './Bed';
import Coffeetable from './Coffeetable';
import Tvstand from './Tvstand';
import Bookshelf from './Bookshelf';
import Leatherbag from './Leatherbag';
import Canvas from './Canvas';
import Backpack from './Backpack';
import Clutch from './Clutch';
import Slingbag from './Slingbag';
import Satchel from './Satchel';
import Messesnger from './Messesnger';
import Hobe from './Hobe';
import The1984 from './The1984';
import Thegreat from './Thegreat';
import Theodysy from './Theodysy';
import Hamlet from './Hamlet';
import Kill from './Kill';
import Pride from './Pride';
import Moby from './Moby';
import Warandpeace from './Warandpeace';
import Airdot from './Airdot';
import Smartphone from './Smartphone';
import Laptop from './Laptop';
import Smartwatch from './Smartwatch';
import Gamming from './Gamming';
import Tablet from './Tablet';
import Vrset from './Vrset';
import Drone from './Drone';
import Bluetooth from './Bluetooth';
import Camera from './Camera';
import Headphone from './Headphone';
import Monitor from './Monitor';
import Mouse from './Mouse';
import Keyboard from './Keyboard';
import Running from './Running';
import Skate from './Skate';
import Slipon from './Slipon';
import Tennis from './Tennis';
import Trainers from './Trainers';
import Casual from './Casual';
import Basketball from './Basketball';
import Hightops from './Hightops';
import Mac13pro from './Mac13pro';
import Ipadmini from './Ipadmini';
import Spadling from './Spadling';
import StigaTableTennis from './StigaTableTennis';
import WilsonBasketBall from './WilsonBasketBall';
import YonexRacket from './YonexRacket';
import Newuser from './Newuser';
import Aboutus from './Aboutus';
import CustomerServices from './CustomerServices';
import Userdashboard from './Userdashboard';
import ContactSuplier from './ContactSuplier';
import OrderSummary  from './OrderSummary';
import Rules  from './Rules';
import PageNotFound  from './PageNotFound';
import Trackorder  from './Trackorder';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Fishmeal />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Manufactures" element={<Manufactures />} />
          <Route path="/ProductCard" element={<ProductCard />} /> {/* Adjusted casing */}
          <Route path="/Signin" element={<Signin />} />
          <Route path="/SignUpPageM" element={<SignUpPageM />} />
          <Route path="/SignUpPageB" element={<SignUpPageB />} />
          <Route path="/ForgotPasswordPage" element={<ForgotPasswordPage />} />
          <Route path="/Maizgrinding" element={<Maizgrinding />} /> 
          <Route path="/Glasscutter" element={<Glasscutter />} /> 
          {/*<Route path="/Fishmeal" element={<Fishmeal />} /> */}
          <Route path="/Livestockfeed" element={<Livestockfeed />} /> {/* Removed extra space */}
          <Route path="/Wheatgrinder" element={<Wheatgrinder />} /> 
          <Route path="/Feedextruder" element={<Feedextruder />} /> 
          <Route path="/Animalfeedsuplier" element={<Animalfeedsuplier />} /> 
          <Route path="/OfferPage" element={<OfferPage />} /> 
          <Route path="/SellerSelfRegistration" element={<SellerSelfRegistration />} />
          <Route path="/SellOnMetaMarket" element={<SellOnMetaMarket />} />
          <Route path="/ManagementVendorApproval" element={<ManagementVendorApproval />} />
          <Route path="/ProductMangPageuser" element={<ProductMangPageuser />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/CommissionCalculation" element={<CommissionCalculation />} />

          <Route path="/Sofaset" element={<Sofaset />} />
          <Route path="/Buynowpage" element={<Buynowpage />} />
          <Route path="/Cartpage" element={<Cartpage />} />
          <Route path="/Airpodmax" element={<Airpodmax />} />
          <Route path="/Dinningtable" element={<Dinningtable />} />
          <Route path="/Wadrobe" element={<Wadrobe />} />
          <Route path="/Chair" element={<Chair />} />
          <Route path="/Bed" element={<Bed />} />
          <Route path="/Coffeetable" element={<Coffeetable />} />
          <Route path="/Bookshelf" element={<Bookshelf />} />
          <Route path="/Tvstand" element={<Tvstand />} />

          <Route path="/Leatherbag" element={<Leatherbag />} />
          <Route path="/Canvas" element={<Canvas />} />
          <Route path="/Backpack" element={<Backpack />} />
          <Route path="/Clutch" element={<Clutch />} />
          <Route path="/Hobe" element={<Hobe />} />
          <Route path="/Messesnger" element={<Messesnger />} />
          <Route path="/Satchel" element={<Satchel />} />
          <Route path="/Slingbag" element={<Slingbag />} />

          <Route path="/Hamlet" element={<Hamlet />} />
          <Route path="/Theodysy" element={<Theodysy />} />
          <Route path="/Warandpeace" element={<Warandpeace />} />
          <Route path="/Kill" element={<Kill />} />
          <Route path="/The1984" element={<The1984 />} />
          <Route path="/Thegreat" element={<Thegreat />} />
          <Route path="/Pride" element={<Pride />} />
          <Route path="/Moby" element={<Moby />} />
          <Route path="/Airdot" element={<Airdot />} />
          <Route path="/Smartphone" element={<Smartphone/>} />
          <Route path="/Laptop" element={<Laptop />} />
          <Route path="/Smartwatch" element={<Smartwatch />} />
          <Route path="/Gamming" element={<Gamming />} />
          <Route path="/Tablet" element={<Tablet/>} />
          <Route path="/Vrset" element={<Vrset />} />
          <Route path="/Drone" element={<Drone />} />
          <Route path="/Bluetooth" element={<Bluetooth />} />
          <Route path="/Camera" element={<Camera />} />
          <Route path="/Headphone" element={<Headphone />} />
          <Route path="/Monitor" element={<Monitor />} />
          <Route path="/Mouse" element={<Mouse />} />
          <Route path="/Keyboard" element={<Keyboard />} />
          <Route path="/Running" element={<Running />} />
          <Route path="/Basketball" element={<Basketball />} />
          <Route path="/Casual" element={<Casual />} />
          <Route path="/Hightops" element={<Hightops />} />
          <Route path="/Tennis" element={<Tennis />} />
          <Route path="/Slipon" element={<Slipon />} />
          <Route path="/Trainers" element={<Trainers />} />
          <Route path="/Skate" element={<Skate />} />
          <Route path="/Mac13pro" element={<Mac13pro />} />
          <Route path="/Ipadmini" element={<Ipadmini />} />

          <Route path="/Spadling" element={<Spadling />} />
          <Route path="/StigaTableTennis" element={<StigaTableTennis />} />
          <Route path="/YonexRacket" element={<YonexRacket />} />
          <Route path="/WilsonBasketBall" element={<WilsonBasketBall />} />
          <Route path="/Newuser" element={<Newuser />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/CustomerServices" element={<CustomerServices />} />
          <Route path="/Userdashboard" element={<Userdashboard />} />
          <Route path="/ContactSuplier" element={<ContactSuplier />} />
          <Route path="/OrderSummary" element={<OrderSummary />} />
          <Route path="/Rules" element={<Rules />} />
          <Route path="/PageNotFound" element={<PageNotFound />} />
          <Route path="/Trackorder" element={<Trackorder />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
