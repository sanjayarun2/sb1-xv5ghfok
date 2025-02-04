/*
  # Schema Updates
  
  1. Changes
    - Remove admin-related tables and policies
    - Add company_locations table
    - Update testimonials table
    - Add new policies for public access
  
  2. Security
    - Remove admin-specific policies
    - Enable RLS with public access where needed
*/

-- Drop admin-related tables and policies
DROP TABLE IF EXISTS admins CASCADE;

-- Remove admin-specific policies
DROP POLICY IF EXISTS "Admin full access for categories" ON categories;
DROP POLICY IF EXISTS "Admin full access for products" ON products;
DROP POLICY IF EXISTS "Admin full access for testimonials" ON testimonials;
DROP POLICY IF EXISTS "Admin full access for project_stats" ON project_stats;
DROP POLICY IF EXISTS "Admin full access for trusted_brands" ON trusted_brands;
DROP POLICY IF EXISTS "Admin full access for product_images" ON product_images;

-- Create company_locations table
CREATE TABLE company_locations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  address text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  is_main_factory boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS for company_locations
ALTER TABLE company_locations ENABLE ROW LEVEL SECURITY;

-- Create public read policy for company_locations
CREATE POLICY "Public read access for company_locations"
  ON company_locations FOR SELECT
  TO PUBLIC
  USING (true);

-- Insert default locations
INSERT INTO company_locations (title, address, phone, email, is_main_factory) VALUES
  ('Main Factory', '123 Industrial Area, Phase 1, Mumbai - 400001', '+91 98765 43210', 'factory@premiumbox.com', true),
  ('Branch Office', '45 Business Hub, Sector 5, Delhi - 110001', '+91 98765 43211', 'delhi@premiumbox.com', false);

-- Modify testimonials table to make avatar optional
ALTER TABLE testimonials
  ALTER COLUMN avatar_url DROP NOT NULL,
  ALTER COLUMN role DROP NOT NULL;

-- Update existing testimonials
UPDATE testimonials
SET avatar_url = NULL
WHERE avatar_url = '';

-- Create function to manage company locations
CREATE OR REPLACE FUNCTION get_company_locations()
RETURNS TABLE (
  id uuid,
  title text,
  address text,
  phone text,
  email text,
  is_main_factory boolean
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    l.id,
    l.title,
    l.address,
    l.phone,
    l.email,
    l.is_main_factory
  FROM company_locations l
  ORDER BY l.is_main_factory DESC, l.title;
END;
$$ LANGUAGE plpgsql;

-- Create view for public company information
CREATE OR REPLACE VIEW public_company_info AS
SELECT
  l.title,
  l.address,
  l.phone,
  l.email,
  l.is_main_factory
FROM company_locations l
ORDER BY l.is_main_factory DESC, l.title;

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_company_locations_main_factory 
ON company_locations(is_main_factory);

-- Update all tables to have public read-only access
CREATE POLICY "Public read-only access"
  ON categories FOR SELECT
  TO PUBLIC
  USING (true);

CREATE POLICY "Public read-only access"
  ON products FOR SELECT
  TO PUBLIC
  USING (true);

CREATE POLICY "Public read-only access"
  ON testimonials FOR SELECT
  TO PUBLIC
  USING (true);

CREATE POLICY "Public read-only access"
  ON project_stats FOR SELECT
  TO PUBLIC
  USING (true);

CREATE POLICY "Public read-only access"
  ON trusted_brands FOR SELECT
  TO PUBLIC
  USING (true);

CREATE POLICY "Public read-only access"
  ON product_images FOR SELECT
  TO PUBLIC
  USING (true);