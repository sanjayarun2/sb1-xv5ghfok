/*
  # Box Manufacturing Database Examples
  
  This file contains example SQL operations for:
  1. Inserting sample data
  2. Querying data with joins
  3. Updating records
  4. Common operations
*/

-- Example 1: Insert sample products
INSERT INTO products (name, description, category_id, image_url, price_type) 
SELECT 
  'Premium Silk Saree Box',
  'Elegant box with golden accents and traditional design',
  id,
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800',
  'Custom Quote'
FROM categories 
WHERE slug = 'saree-boxes';

INSERT INTO products (name, description, category_id, image_url, price_type)
SELECT 
  'Luxury Gift Box',
  'Premium printed box with metallic finish',
  id,
  'https://images.unsplash.com/photo-1607166452427-7e4477079ae6?auto=format&fit=crop&q=80&w=800',
  'Custom Quote'
FROM categories 
WHERE slug = 'printed-boxes';

-- Example 2: Insert testimonials
INSERT INTO testimonials (name, role, content, avatar_url) VALUES
(
  'Priya Sharma',
  'Owner, Ethnic Elegance',
  'Their Saree boxes are of exceptional quality. The design and finish perfectly complement our premium sarees.',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
),
(
  'Rajesh Kumar',
  'Director, SK Exports',
  'Best manufacturer for bulk carton boxes. Their quality and timely delivery have helped our business grow.',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
);

-- Example 3: Insert project stats
INSERT INTO project_stats (stat_name, value, icon_name, description) VALUES
('Projects Completed', 500, 'CheckCircle', 'Successful Deliveries'),
('Happy Clients', 200, 'Users', 'Satisfied Customers'),
('Years Experience', 15, 'Clock', 'Industry Experience'),
('Product Types', 50, 'Package', 'Box Varieties');

-- Example 4: Insert trusted brands
INSERT INTO trusted_brands (name, logo_url, website_url) VALUES
('Fashion Hub', 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9', 'https://example.com/fashionhub'),
('Ethnic Wear Co', 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9', 'https://example.com/ethnicwear');

-- Example 5: Query products with category information
SELECT 
  p.name as product_name,
  p.description,
  p.price_type,
  c.name as category_name,
  c.slug as category_slug
FROM products p
JOIN categories c ON p.category_id = c.id
ORDER BY c.name, p.name;

-- Example 6: Get latest testimonials
SELECT 
  name,
  role,
  content,
  avatar_url,
  created_at
FROM testimonials
ORDER BY created_at DESC
LIMIT 3;

-- Example 7: Count products by category
SELECT 
  c.name as category_name,
  COUNT(p.id) as product_count
FROM categories c
LEFT JOIN products p ON c.id = p.category_id
GROUP BY c.id, c.name
ORDER BY c.name;

-- Example 8: Update product price type
UPDATE products
SET price_type = 'Bulk Pricing'
WHERE id IN (
  SELECT p.id
  FROM products p
  JOIN categories c ON p.category_id = c.id
  WHERE c.slug = 'carton-boxes'
);

-- Example 9: Update category icon
UPDATE categories
SET icon_name = 'Package'
WHERE slug = 'carton-boxes';

-- Example 10: Get products with their full hierarchy
WITH RECURSIVE product_hierarchy AS (
  SELECT 
    p.id,
    p.name,
    c.name as category,
    1 as level
  FROM products p
  JOIN categories c ON p.category_id = c.id
)
SELECT * FROM product_hierarchy
ORDER BY category, name;

-- Example 11: Search products by name or description
CREATE OR REPLACE FUNCTION search_products(search_term text)
RETURNS TABLE (
  id uuid,
  name text,
  description text,
  category_name text,
  price_type text
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    p.id,
    p.name,
    p.description,
    c.name as category_name,
    p.price_type
  FROM products p
  JOIN categories c ON p.category_id = c.id
  WHERE 
    p.name ILIKE '%' || search_term || '%'
    OR p.description ILIKE '%' || search_term || '%';
END;
$$ LANGUAGE plpgsql;

-- Example 12: Get category statistics
CREATE OR REPLACE VIEW category_stats AS
SELECT 
  c.name as category_name,
  COUNT(p.id) as total_products,
  MIN(p.created_at) as oldest_product,
  MAX(p.created_at) as newest_product
FROM categories c
LEFT JOIN products p ON c.id = p.category_id
GROUP BY c.id, c.name;

-- Example 13: Audit trigger for products
CREATE OR REPLACE FUNCTION audit_product_changes()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    RAISE NOTICE 'New product added: %', NEW.name;
  ELSIF TG_OP = 'UPDATE' THEN
    RAISE NOTICE 'Product updated: %', NEW.name;
  ELSIF TG_OP = 'DELETE' THEN
    RAISE NOTICE 'Product deleted: %', OLD.name;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER product_audit
AFTER INSERT OR UPDATE OR DELETE ON products
FOR EACH ROW EXECUTE FUNCTION audit_product_changes();

-- Example 14: Function to generate product report
CREATE OR REPLACE FUNCTION generate_product_report()
RETURNS TABLE (
  category_name text,
  total_products bigint,
  latest_product text,
  latest_added timestamp with time zone
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    c.name,
    COUNT(p.id),
    MAX(p.name),
    MAX(p.created_at)
  FROM categories c
  LEFT JOIN products p ON c.id = p.category_id
  GROUP BY c.id, c.name
  ORDER BY c.name;
END;
$$ LANGUAGE plpgsql;