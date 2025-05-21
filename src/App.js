import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Bottom from "./components/bottom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route>
          <Route path="/" index element={<h1>Home</h1>} />
          <Route path="/sobre-nos" element={<h1>Sobre Nós</h1>} />
          <Route path="/galeria" element={<h1>Galeria</h1>} />
          <Route path="/contato" element={<h1>Contato</h1>} />
          <Route path="/doar" element={<h1>Doar</h1>} />
        </Route>
      </Routes>
      <Bottom />
    </BrowserRouter>
  );
}

export default App;