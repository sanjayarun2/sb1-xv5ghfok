import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ManufacturingProcess from './components/ManufacturingProcess';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import TrustedBrands from './components/TrustedBrands';
import ProjectStats from './components/ProjectStats';
import Footer from './components/Footer';
import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/admin/Dashboard';
import ProductsAdmin from './pages/admin/ProductsAdmin';
import TestimonialsAdmin from './pages/admin/TestimonialsAdmin';
import BrandsAdmin from './pages/admin/BrandsAdmin';
import StatsAdmin from './pages/admin/StatsAdmin';
import ProtectedRoute from './components/ProtectedRoute';
import SEOHead from './components/SEOHead';
import ProductDetails from './pages/ProductDetails';
import ProcessArticle from './pages/ProcessArticle';
import AboutUs from './pages/AboutUs';

export default function App() {
  return (
    <AuthProvider>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-white">
            <SEOHead 
              title="Premium Box Manufacturing"
              description="Leading manufacturer of premium Saree boxes, printing boxes, and carton boxes. Custom designs with superior quality for your packaging needs."
              keywords="saree box manufacturer, printing boxes, carton boxes, packaging solutions, custom boxes"
              canonicalUrl="https://yourwebsite.com"
            />
            <Routes>
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/admin/*" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }>
                <Route path="products" element={<ProductsAdmin />} />
                <Route path="testimonials" element={<TestimonialsAdmin />} />
                <Route path="brands" element={<BrandsAdmin />} />
                <Route path="stats" element={<StatsAdmin />} />
              </Route>
              <Route path="/" element={
                <>
                  <Navbar />
                  <div className="space-y-8">
                    <Hero />
                    <Features />
                    <ManufacturingProcess />
                    <ProjectStats />
                    <Products />
                    <TrustedBrands />
                    <Testimonials />
                  </div>
                  <Footer />
                </>
              } />
              <Route path="/about" element={
                <>
                  <Navbar />
                  <AboutUs />
                  <Footer />
                </>
              } />
              <Route path="/product/:id" element={
                <>
                  <Navbar />
                  <ProductDetails />
                  <Footer />
                </>
              } />
              <Route path="/process/:process" element={
                <>
                  <Navbar />
                  <ProcessArticle />
                  <Footer />
                </>
              } />
            </Routes>
          </div>
        </Router>
      </HelmetProvider>
    </AuthProvider>
  );
}