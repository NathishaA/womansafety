import './App.css';
import Navbar from './component/Navbar';
import Services from './component/Services';
import SignIn from './component/SignIn';
import { Route,Routes } from 'react-router-dom';
import SignUp from './component/SignUp';
import AboutPage from './component/AboutUs';
import Bike from './component/Bike';
import Rooms from './component/Rooms';
import Cyber from './component/Cyber';
import Periods from './component/Periods';
import Delievery from './component/Deleivery';
import DoctorCard from './component/DoctorCard';
import Mental from './component/Mental';
import FitnessTips from './component/FitnessTips';
import BookingConfirmed from './component/BookingConfirmed';
import RoomConfirm from './component/RoomConfirm';
import CyberConfirm from './component/CyberConfirm';
import PeriodsConfirmed from './component/PeriodsConfirmed';
import DoctorConfirm from './component/DoctorConfirm';
import AdminDashboard from './component/Dashboard';
import Dashboard from './component/Dashboard';
import { ContactPage } from '@mui/icons-material';
import HomeNew from './component/HomeNew';





function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/main" element={<Navbar/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/aboutpage" element={<AboutPage/>}/>
        <Route path="/bike-ride" element={<Bike/>}/>
        <Route path="/rooms" element={<Rooms/>}/>
        <Route path="/cyber-crime" element={<Cyber/>}/>
        <Route path="/menstruals" element={<Periods/>}/>
        <Route path="/food-delivery" element={<Delievery/>}/>
        <Route path="/pregnancy" element={<DoctorCard/>}/>
        <Route path="/mental-counselling" element={<Mental/>}/>
        <Route path="/fitness" element={<FitnessTips/>}/>
        <Route path="/MapC" element={<BookingConfirmed/>}/>
        <Route path="/RoomC" element={<RoomConfirm/>}/>
        <Route path="/CyberC" element={<CyberConfirm/>}/>
        <Route path="/PeriodC" element={<PeriodsConfirmed/>}/>
        <Route path="/booking" element={<DoctorConfirm/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      //<HomeNew/>

      //<Dashboard/>
      
      // <Services/>
      // <ContactPage/>
      );
}

export default App;
