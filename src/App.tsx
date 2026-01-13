import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ManufacturingProcess from './components/ManufacturingProcess';
import Products from './components/Products';
import PillarSection from './components/PillarSection';
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
import WhatsAppButton from './components/whatsappbutton'; 

export default function App() {
  return (
    <AuthProvider>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-white">
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
                  <SEOHead 
                    title="Saree Box Manufacturer | Premium Saree Packaging Boxes Wholesale"
                    description="Leading saree box manufacturer offering custom saree packing boxes, wedding saree boxes, and silk saree packaging at wholesale prices. Pan-India delivery."
                    keywords="saree box manufacturer, saree packaging box, saree boxes wholesale, saree box price, wedding saree packing box, silk saree box, saree gift box"
                    canonicalUrl="https://premiumpacking.in"
                  />
                  <Navbar />
                  <div className="space-y-8">
                    <Hero />
                    <Products />
                    <PillarSection /> 
                    <Features />
                    <ManufacturingProcess />
                    <ProjectStats />
                    <TrustedBrands />
                    <Testimonials />
                  </div>
                  <Footer />
                </>
              } />

              <Route path="/about" element={
                <>
                  <SEOHead 
                    title="About Us | Premium Box Manufacturing"
                    description="Leading manufacturer of premium packaging solutions based in Sivakasi and Elampillai."
                    canonicalUrl="https://premiumpacking.in/about"
                  />
                  <Navbar />
                  <AboutUs />
                  <Footer />
                </>
              } />
              <Route path="/product/:slug" element={
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
            
            <WhatsAppButton /> 
          </div>
        </Router>
      </HelmetProvider>
    </AuthProvider>
  );
}