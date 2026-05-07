import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import ShopsPage from "./pages/ShopsPage/ShopsPage";
import PetInsurancePage from "./pages/PetInsurancePage/PetInsurancePage";
import ServicePage from "./pages/ServicePage/ServicePage";
import { Routes, Route, Navigate } from "react-router-dom";
import SupplierOffersPage from "./pages/SupplierOffersPage/SupplierOffersPage";
import SupplierOfferDetailsPage from "./pages/SupplierOfferDetailsPage/SupplierOfferDetailsPage";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <Routes>
          <Route path="/" element={<Navigate to="/shops" />} />
          <Route path="/shops" element={<ShopsPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/pet-insurance" element={<PetInsurancePage />} />
          <Route path="/supplier-offers" element={<SupplierOffersPage />} />
		  <Route path="/supplier-offers/:id" element={<SupplierOfferDetailsPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;