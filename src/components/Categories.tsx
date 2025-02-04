import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import * as Icons from 'lucide-react';

export default function Categories() {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name');
      if (!error && data) setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <section id="categories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Manufacturing Categories
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Explore our diverse range of box manufacturing solutions
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const IconComponent = (Icons as any)[category.icon_name] || Icons.Box;
            return (
              <Link 
                to={`/category/${category.slug}`}
                key={category.id} 
                className="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 hover:bg-gray-50 rounded-lg shadow-sm transition-all duration-300"
              >
                <div className="flex items-center">
                  <IconComponent className="h-6 w-6 text-blue-600" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900">
                    {category.name}
                  </h3>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  {category.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}