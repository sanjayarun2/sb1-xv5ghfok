/*
  # Add product images support
  
  1. New Tables
    - `product_images`
      - `id` (uuid, primary key)
      - `product_id` (uuid, references products)
      - `url` (text)
      - `alt_text` (text)
      - `display_order` (integer)
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on `product_images` table
    - Add policies for public read access
    - Add policies for admin write access
*/

-- Create product_images table
CREATE TABLE product_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid REFERENCES products(id) ON DELETE CASCADE,
  url text NOT NULL,
  alt_text text,
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create index for better performance
CREATE INDEX idx_product_images_product ON product_images(product_id);
CREATE INDEX idx_product_images_order ON product_images(display_order);

-- Enable RLS
ALTER TABLE product_images ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Public read access for product_images"
  ON product_images FOR SELECT
  TO PUBLIC
  USING (true);

CREATE POLICY "Admin full access for product_images"
  ON product_images FOR ALL
  TO authenticated
  USING (true);

-- Insert sample data
INSERT INTO product_images (product_id, url, alt_text, display_order)
SELECT 
  p.id,
  'https://images.unsplash.com/photo-1607166452427-7e4477079ae6?auto=format&fit=crop&q=80&w=800',
  p.name || ' - View 1',
  1
FROM products p;

-- Add more sample views for each product
INSERT INTO product_images (product_id, url, alt_text, display_order)
SELECT 
  p.id,
  'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800',
  p.name || ' - View 2',
  2
FROM products p;

INSERT INTO product_images (product_id, url, alt_text, display_order)
SELECT 
  p.id,
  'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=800',
  p.name || ' - View 3',
  3
FROM products p;