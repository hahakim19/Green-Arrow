import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import LandingPage from "./pages/landing-page";
import AboutPage from "./pages/about-page";
import LanguageSwitcher from "./components/language-switcher/language-switcher";
import RequestQuotePage from "./pages/request-quote-page";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/request-quote" element={<RequestQuotePage />} />
      </Routes>
      <LanguageSwitcher />
    </BrowserRouter>
  );
}

export default App;
