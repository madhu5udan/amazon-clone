import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="app">
         <Header />
        <Routes>
          <Route path="/checkout" element={
            <>
              <Checkout />
            </>
          } />
          {/* this is a default route if nothing matches this page renders it must be at the end always */}
          <Route path="/" element={ 
            <>
              <Home />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;