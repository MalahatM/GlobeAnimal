import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <Routes>
          <Route path="/" element={<Navigate to="/shops" />} />
          
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;