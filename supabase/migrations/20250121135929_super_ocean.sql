/*
  # Initial Schema Setup for Box Manufacturing Website

  1. Tables Created:
    - categories: For product categories
    - products: For box products
    - testimonials: For client testimonials
    - project_stats: For company statistics
    - trusted_brands: For partner brands

  2. Security:
    - RLS enabled on all tables
    - Public read access for all tables
    - Admin write access for authenticated users
*/

-- Create categories table
CREATE TABLE categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  icon_name text NOT NULL,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create products table
CREATE TABLE products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES categories(id),
  name text NOT NULL,
  description text,
  image_url text,
  price_type text NOT NULL DEFAULT 'Custom Quote',
  created_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text,
  content text NOT NULL,
  avatar_url text,
  created_at timestamptz DEFAULT now()
);

-- Create project stats table
CREATE TABLE project_stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  stat_name text NOT NULL,
  value integer NOT NULL,
  icon_name text NOT NULL,
  description text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create trusted brands table
CREATE TABLE trusted_brands (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  logo_url text NOT NULL,
  website_url text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE trusted_brands ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public read access for categories"
  ON categories FOR SELECT
  TO PUBLIC
  USING (true);

CREATE POLICY "Public read access for products"
  ON products FOR SELECT
  TO PUBLIC
  USING (true);

CREATE POLICY "Public read access for testimonials"
  ON testimonials FOR SELECT
  TO PUBLIC
  USING (true);

CREATE POLICY "Public read access for project_stats"
  ON project_stats FOR SELECT
  TO PUBLIC
  USING (true);

CREATE POLICY "Public read access for trusted_brands"
  ON trusted_brands FOR SELECT
  TO PUBLIC
  USING (true);

-- Create policies for admin write access
CREATE POLICY "Admin full access for categories"
  ON categories FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Admin full access for products"
  ON products FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Admin full access for testimonials"
  ON testimonials FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Admin full access for project_stats"
  ON project_stats FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Admin full access for trusted_brands"
  ON trusted_brands FOR ALL
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_name ON products(name);
CREATE INDEX idx_categories_slug ON categories(slug);
CREATE INDEX idx_testimonials_created ON testimonials(created_at);

-- Insert sample data for categories
INSERT INTO categories (name, description, icon_name, slug) VALUES
  ('Saree Boxes', 'Elegant boxes for traditional wear', 'Box', 'saree-boxes'),
  ('Printed Boxes', 'Custom printed packaging solutions', 'Printer', 'printed-boxes'),
  ('Carton Boxes', 'Bulk packaging solutions', 'Package', 'carton-boxes');