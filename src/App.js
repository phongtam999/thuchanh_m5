import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import Products from "./pages/Products";
import ProductShow from "./pages/ProductShow";
import ProductEdit from "./pages/ProductEdit";
import ProductAdd from "./pages/ProductAdd";

function App() {
  return ( 
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Products/>} />
            <Route path="/products/:id/edit" element={<ProductEdit />} />
            <Route path="/products/:id" element={<ProductShow/>} />
            <Route path="/products/create" element={<ProductAdd/>} /> 
          </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
