import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Package, Box, Users, BarChart3, Award, LogOut, FolderTree } from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Package className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold">Admin Dashboard</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
                <Link to="/admin/categories" className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-600">
                  <FolderTree className="h-4 w-4 mr-2" />
                  Categories
                </Link>
                <Link to="/admin/products" className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-600">
                  <Box className="h-4 w-4 mr-2" />
                  Products
                </Link>
                <Link to="/admin/testimonials" className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-600">
                  <Users className="h-4 w-4 mr-2" />
                  Testimonials
                </Link>
                <Link to="/admin/brands" className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-600">
                  <Award className="h-4 w-4 mr-2" />
                  Brands
                </Link>
                <Link to="/admin/stats" className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-600">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Stats
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-10">
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}