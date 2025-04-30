import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/utils/Navbar";
import EnrollDoctorForm from "./pages/EnrollDoctorForm";
import PredictionPage from "./pages/PredictionPage";
import Contact from "./pages/Contact";

function App() {

  return (
    <>
      <Router>
       
     <Navbar/>
      <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
        />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/enrolldoctor" element={<EnrollDoctorForm />} />
            <Route path="/about" element={<About/>} />
            <Route path="/prediction" element={<PredictionPage/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Router>
    </>
  )
}

export default App
