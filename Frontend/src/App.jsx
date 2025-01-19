import { useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Landing from "./component/Landing/Landing";
import Apparel from "./component/Landing/apparel/Apparel";
import Footer from "./component/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        {/* <Nav /> */}
        <Route path="/landing" element={<Landing />}>
          <Route path="apparel" element={<Apparel />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
