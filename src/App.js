import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Bottom from "./components/bottom";
import Home from "./pages/home";
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import Donate from "./pages/donate";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route>
          <Route path="/" index element={<Home/>} />
          <Route path="/sobre-nos" element={<About/>} />
          <Route path="/galeria" element={<Gallery/>} />
          <Route path="/contato" element={<Contact/>} />
          <Route path="/doar" element={<Donate/>} />
        </Route>
      </Routes>
      <Bottom />
    </BrowserRouter>
  );
}

export default App;