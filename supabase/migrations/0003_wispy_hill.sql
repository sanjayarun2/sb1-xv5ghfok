/*
  # Add Project Stats and Trusted Brands Tables

  1. New Tables
    - project_stats
      - stat_name: Name of the statistic
      - value: Numeric value
      - icon_name: Lucide icon name
      - description: Description text
    - trusted_brands
      - name: Brand name
      - logo_url: URL to brand logo
      - website_url: Brand website URL

  2. Security
    - Enable RLS on both tables
    - Add public read access
    - Add authenticated write access
*/

-- Create project stats table
CREATE TABLE project_stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  stat_name text NOT NULL,
  value integer NOT NULL,
  icon_name text NOT NULL,
  description text,
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

-- Enable RLS
ALTER TABLE project_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE trusted_brands ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Public read access for project_stats"
  ON project_stats FOR SELECT TO PUBLIC
  USING (true);

CREATE POLICY "Public read access for trusted_brands"
  ON trusted_brands FOR SELECT TO PUBLIC
  USING (true);

CREATE POLICY "Admin full access for project_stats"
  ON project_stats FOR ALL TO authenticated
  USING (true);

CREATE POLICY "Admin full access for trusted_brands"
  ON trusted_brands FOR ALL TO authenticated
  USING (true);

-- Insert sample data
INSERT INTO project_stats (stat_name, value, icon_name, description) VALUES
  ('Projects Completed', 500, 'CheckCircle', 'Successful Deliveries'),
  ('Happy Clients', 200, 'Users', 'Satisfied Customers'),
  ('Years Experience', 15, 'Clock', 'Industry Experience'),
  ('Product Types', 50, 'Package', 'Box Varieties');

INSERT INTO trusted_brands (name, logo_url, website_url) VALUES
  ('Example Brand', 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9', 'https://example.com');