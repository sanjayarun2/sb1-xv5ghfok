/*
  # Authentication Setup

  1. New Tables
    - auth.users (managed by Supabase Auth)
    
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated admin access
*/

-- Create admin user with email/password
SELECT supabase_auth.create_user(
  'admin@premiumbox.com',
  'packing122',
  '{
    "email_confirmed": true,
    "role": "admin"
  }'
);

-- Update RLS policies to use auth.uid()
CREATE POLICY "Admin full access for categories"
  ON categories FOR ALL
  USING (auth.role() = 'admin');

CREATE POLICY "Admin full access for products"
  ON products FOR ALL
  USING (auth.role() = 'admin');

CREATE POLICY "Admin full access for testimonials"
  ON testimonials FOR ALL
  USING (auth.role() = 'admin');

CREATE POLICY "Admin full access for project_stats"
  ON project_stats FOR ALL
  USING (auth.role() = 'admin');

CREATE POLICY "Admin full access for trusted_brands"
  ON trusted_brands FOR ALL
  USING (auth.role() = 'admin');