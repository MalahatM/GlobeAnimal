import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import ShopsPage from "./pages/ShopsPage/ShopsPage";
import PetInsurancePage from "./pages/PetInsurancePage/PetInsurancePage";
import ServicePage from "./pages/ServicePage/ServicePage";
import SupplierOffersPage from "./pages/SupplierOffersPage/SupplierOffersPage";
import SupplierOfferDetailsPage from "./pages/SupplierOfferDetailsPage/SupplierOfferDetailsPage";
import AccommodationPage from "./pages/AccommodationPage/AccommodationPage";
import ClinicsPage from "./pages/ClinicsPage/ClinicsPage";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shops" element={<ShopsPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/pet-insurance" element={<PetInsurancePage />} />
          <Route path="/supplier-offers" element={<SupplierOffersPage />} />
          <Route
            path="/supplier-offers/:id"
            element={<SupplierOfferDetailsPage />}
          />
          <Route path="/clinics" element={<ClinicsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
		  <Route path="/accommodation" element={<AccommodationPage />} />
		  <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;