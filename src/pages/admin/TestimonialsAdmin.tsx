import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Plus, Edit, Trash2 } from 'lucide-react';

export default function TestimonialsAdmin() {
  const [testimonials, setTestimonials] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(null);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error) setTestimonials(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const testimonialData = {
      name: formData.get('name'),
      content: formData.get('content')
    };

    // Add optional fields if they have values
    const role = formData.get('role')?.trim();
    if (role) testimonialData.role = role;

    const avatarUrl = formData.get('avatar_url')?.trim();
    if (avatarUrl) testimonialData.avatar_url = avatarUrl;

    try {
      if (currentTestimonial) {
        const { error } = await supabase
          .from('testimonials')
          .update(testimonialData)
          .eq('id', currentTestimonial.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('testimonials')
          .insert([testimonialData]);
        if (error) throw error;
      }

      await fetchTestimonials();
      setIsEditing(false);
      setCurrentTestimonial(null);
    } catch (error) {
      console.error('Error saving testimonial:', error);
      alert('Failed to save testimonial. Please try again.');
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Testimonials Management</h2>
        <button
          onClick={() => {
            setCurrentTestimonial(null);
            setIsEditing(true);
          }}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Testimonial
        </button>
      </div>

      {isEditing && (
        <form onSubmit={handleSubmit} className="mb-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name *</label>
            <input
              name="name"
              defaultValue={currentTestimonial?.name}
              className="mt-1 w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Role/Company (Optional)</label>
            <input
              name="role"
              defaultValue={currentTestimonial?.role}
              className="mt-1 w-full p-2 border rounded"
              placeholder="CEO, Company Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Content *</label>
            <textarea
              name="content"
              defaultValue={currentTestimonial?.content}
              className="mt-1 w-full p-2 border rounded"
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Avatar URL (Optional)</label>
            <input
              name="avatar_url"
              defaultValue={currentTestimonial?.avatar_url}
              className="mt-1 w-full p-2 border rounded"
              placeholder="https://example.com/avatar.jpg"
            />
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => {
                setIsEditing(false);
                setCurrentTestimonial(null);
              }}
              className="px-4 py-2 text-gray-600 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              {currentTestimonial ? 'Update' : 'Add'} Testimonial
            </button>
          </div>
        </form>
      )}

      <div className="grid gap-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex items-center justify-between p-4 border rounded"
          >
            <div className="flex items-center gap-4">
              {testimonial.avatar_url ? (
                <img
                  src={testimonial.avatar_url}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
              )}
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                {testimonial.role && (
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                )}
                <p className="text-sm text-gray-500 mt-1">{testimonial.content}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setCurrentTestimonial(testimonial);
                  setIsEditing(true);
                }}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded"
              >
                <Edit className="h-5 w-5" />
              </button>
              <button
                onClick={async () => {
                  if (confirm('Are you sure you want to delete this testimonial?')) {
                    const { error } = await supabase
                      .from('testimonials')
                      .delete()
                      .eq('id', testimonial.id);
                    if (!error) fetchTestimonials();
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