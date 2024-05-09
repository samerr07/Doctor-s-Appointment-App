import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors/Doctors"
import DoctorDetails from "./pages/Doctors/DoctorDetails";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import Services from "./pages/Services";


function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/doctors/:id" element={<DoctorDetails/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
