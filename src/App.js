import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Header from "./common/Header";

function App() {
  return (
    <>
      {/* <Header />
      <Banner />
      <Product  title="Today's" head="Flash Sales"/>
      <Categories title="Categories" head="Browse By Category"/> */}

      <BrowserRouter>
          <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
