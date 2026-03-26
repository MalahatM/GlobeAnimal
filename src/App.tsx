import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import ShopsPage from "./pages/ShopsPage/ShopsPage";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <ShopsPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;