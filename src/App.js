import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About/About";
import "./App.css";
import Career from "./Career/Career";
import Contacts from "./Contacts/Contacts";
import Home from "./Home/Home/Home";
import NotFound from "./NotFound/NotFound";
import Services from "./Services/Services";

function App() {
  return (
    //used react router dom for routing all components
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/services" element={<Services></Services>} />
        <Route path="/contacts" element={<Contacts></Contacts>} />
        <Route path="/career" element={<Career></Career>} />
        <Route path="/*" element={<NotFound></NotFound>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
