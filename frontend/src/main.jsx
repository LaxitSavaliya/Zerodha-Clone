import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./landing_page/Home/HomePage";
import SignUp from "./landing_page/Signup/SignUp";
import AboutPage from "./landing_page/About/AboutPage";
import ProductsPage from "./landing_page/Products/ProductsPage";
import PricingPage from "./landing_page/Pricing/PricingPage";
import SupportPage from "./landing_page/Support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from './landing_page/NotFound';
import Login from './landing_page/Signup/Login';

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="login" element={<Login/>}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/product" element={<ProductsPage />}></Route>
      <Route path="/pricing" element={<PricingPage />}></Route>
      <Route path="/support" element={<SupportPage />}></Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer />
  </BrowserRouter>
);
