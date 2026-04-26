import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import ShopsPage from "./pages/ShopsPage/ShopsPage";
import ServicePage from "./pages/ServicePage/ServicePage";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <Routes>
          <Route path="/" element={<Navigate to="/shops" />} />
          <Route path="/shops" element={<ShopsPage />} />
          <Route path="/service" element={<ServicePage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;