/*
  # Initial Schema Setup

  1. New Tables
    - categories
      - id (uuid, primary key)
      - name (text)
      - description (text)
      - icon_name (text)
      - slug (text, unique)
      - created_at (timestamp)
    
    - products
      - id (uuid, primary key)
      - category_id (uuid, foreign key)
      - name (text)
      - description (text)
      - image_url (text)
      - price_type (text)
      - created_at (timestamp)
    
    - testimonials
      - id (uuid, primary key)
      - name (text)
      - role (text)
      - content (text)
      - avatar_url (text)
      - created_at (timestamp)
    
    - admins
      - id (uuid, primary key)
      - email (text, unique)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
    - Add policies for authenticated admin access
*/

-- Create tables
CREATE TABLE categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  icon_name text NOT NULL,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES categories(id),
  name text NOT NULL,
  description text,
  image_url text,
  price_type text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text,
  content text NOT NULL,
  avatar_url text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE admins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Public read access for categories"
  ON categories FOR SELECT TO PUBLIC
  USING (true);

CREATE POLICY "Public read access for products"
  ON products FOR SELECT TO PUBLIC
  USING (true);

CREATE POLICY "Public read access for testimonials"
  ON testimonials FOR SELECT TO PUBLIC
  USING (true);

-- Admin policies for full access
CREATE POLICY "Admin full access for categories"
  ON categories FOR ALL TO authenticated
  USING (true);

CREATE POLICY "Admin full access for products"
  ON products FOR ALL TO authenticated
  USING (true);

CREATE POLICY "Admin full access for testimonials"
  ON testimonials FOR ALL TO authenticated
  USING (true);

-- Insert initial admin user
INSERT INTO admins (email)
VALUES ('admin@example.com');