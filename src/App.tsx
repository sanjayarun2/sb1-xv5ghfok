import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Suspense, lazy } from 'react';
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
import ProtectedRoute from './components/ProtectedRoute';
import SEOHead from './components/SEOHead';
import ProductDetails from './pages/ProductDetails';
import ProcessArticle from './pages/ProcessArticle';
import SareeBoxManufacturing from './pages/SareeBoxManufacturing';
import AboutUs from './pages/AboutUs';
import CityLanding from './pages/CityLanding';
import ExportSareeBoxes from './pages/ExportSareeBoxes';
import SareeBoxGallery from './pages/SareeBoxGallery';
import CaseStudyIndex from './pages/CaseStudyIndex';
import CaseStudy from './pages/CaseStudy';
import WhySareeBoxOnly from './pages/WhySareeBoxOnly';
import TrustStrip from './components/TrustStrip';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/whatsappbutton'; 

const AdminLogin = lazy(() => import('./pages/AdminLogin'));
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const ProductsAdmin = lazy(() => import('./pages/admin/ProductsAdmin'));
const TestimonialsAdmin = lazy(() => import('./pages/admin/TestimonialsAdmin'));
const BrandsAdmin = lazy(() => import('./pages/admin/BrandsAdmin'));
const StatsAdmin = lazy(() => import('./pages/admin/StatsAdmin'));

export default function App() {
  return (
    <AuthProvider>
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-white">
            <Routes>
              <Route
                path="/admin"
                element={
                  <Suspense fallback={null}>
                    <AdminLogin />
                  </Suspense>
                }
              />
              <Route
                path="/admin/*"
                element={
                  <ProtectedRoute>
                    <Suspense fallback={null}>
                      <Dashboard />
                    </Suspense>
                  </ProtectedRoute>
                }
              >
                <Route
                  path="products"
                  element={
                    <Suspense fallback={null}>
                      <ProductsAdmin />
                    </Suspense>
                  }
                />
                <Route
                  path="testimonials"
                  element={
                    <Suspense fallback={null}>
                      <TestimonialsAdmin />
                    </Suspense>
                  }
                />
                <Route
                  path="brands"
                  element={
                    <Suspense fallback={null}>
                      <BrandsAdmin />
                    </Suspense>
                  }
                />
                <Route
                  path="stats"
                  element={
                    <Suspense fallback={null}>
                      <StatsAdmin />
                    </Suspense>
                  }
                />
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
                  <TrustStrip variant="both" />
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
              
              {/* FIX: Redirect empty /product back to home catalog */}
              <Route path="/product" element={<Navigate to="/" replace />} />

              {/* FIX: Use :slug for SEO friendly URLs */}
              <Route path="/product/:slug" element={
                <>
                  <Navbar />
                  <ProductDetails />
                  <Footer />
                </>
              } />

              <Route path="/process/saree-box-manufacturing" element={
                <>
                  <Navbar />
                  <SareeBoxManufacturing />
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

              <Route path="/gallery" element={
                <>
                  <Navbar />
                  <SareeBoxGallery />
                  <Footer />
                </>
              } />

              <Route path="/case-study" element={
                <>
                  <Navbar />
                  <CaseStudyIndex />
                  <Footer />
                </>
              } />

              <Route path="/case-study/:slug" element={
                <>
                  <Navbar />
                  <CaseStudy />
                  <Footer />
                </>
              } />

              <Route path="/why-saree-box-only" element={
                <>
                  <Navbar />
                  <WhySareeBoxOnly />
                  <Footer />
                </>
              } />

              <Route
                path="/:citySlug"
                element={
                  <>
                    <Navbar />
                    <CityLanding />
                    <Footer />
                  </>
                }
              />

              <Route
                path="/export-saree-boxes"
                element={
                  <>
                    <Navbar />
                    <ExportSareeBoxes />
                    <Footer />
                  </>
                }
              />
            </Routes>
            
            <WhatsAppButton /> 
          </div>
        </Router>
      </HelmetProvider>
    </AuthProvider>
  );
}