import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Plus, Edit, Trash2 } from 'lucide-react';

export default function BrandsAdmin() {
  const [brands, setBrands] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBrand, setCurrentBrand] = useState(null);

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    const { data } = await supabase
      .from('trusted_brands')
      .select('*')
      .order('created_at', { ascending: true });
    if (data) setBrands(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const brandData = {
      name: formData.get('name'),
      logo_url: formData.get('logo_url'),
      website_url: formData.get('website_url')
    };

    if (isEditing && currentBrand) {
      await supabase
        .from('trusted_brands')
        .update(brandData)
        .eq('id', currentBrand.id);
    } else {
      await supabase
        .from('trusted_brands')
        .insert([brandData]);
    }

    fetchBrands();
    setIsEditing(false);
    setCurrentBrand(null);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Trusted Brands Management</h2>
        <button
          onClick={() => {
            setCurrentBrand(null);
            setIsEditing(true);
          }}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Brand
        </button>
      </div>

      {isEditing && (
        <form onSubmit={handleSubmit} className="mb-8 space-y-4">
          <input
            name="name"
            defaultValue={currentBrand?.name}
            placeholder="Brand Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            name="logo_url"
            defaultValue={currentBrand?.logo_url}
            placeholder="Logo URL"
            className="w-full p-2 border rounded"
            required
          />
          <input
            name="website_url"
            defaultValue={currentBrand?.website_url}
            placeholder="Website URL"
            className="w-full p-2 border rounded"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => {
                setIsEditing(false);
                setCurrentBrand(null);
              }}
              className="px-4 py-2 text-gray-600 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              {currentBrand ? 'Update' : 'Add'} Brand
            </button>
          </div>
        </form>
      )}

      <div className="grid gap-4">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="flex items-center justify-between p-4 border rounded"
          >
            <div className="flex items-center gap-4">
              <img
                src={brand.logo_url}
                alt={brand.name}
                className="h-8 object-contain"
              />
              <div>
                <h3 className="font-semibold">{brand.name}</h3>
                <a
                  href={brand.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  {brand.website_url}
                </a>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setCurrentBrand(brand);
                  setIsEditing(true);
                }}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded"
              >
                <Edit className="h-5 w-5" />
              </button>
              <button
                onClick={async () => {
                  if (confirm('Are you sure you want to delete this brand?')) {
                    await supabase
                      .from('trusted_brands')
                      .delete()
                      .eq('id', brand.id);
                    fetchBrands();
                  }
                }}
                className="p-2 text-red-600 hover:bg-red-50 rounded"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}