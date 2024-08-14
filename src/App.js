import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Login from "./pages/Login";
import ViewAllProducts from "./pages/ViewAllProducts";
import Error from "./pages/Error";

function App() {
  return (
    <>
      {/* <Header />
      <Banner />
      <Product  title="Today's" head="Flash Sales"/>
      <Categories title="Categories" head="Browse By Category"/> */}

      <BrowserRouter>
        <Header />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/viewAllProducts" element={<ViewAllProducts />} />
          <Route path="/error" element={<Error />} />
        </Routes>
        <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
