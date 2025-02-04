/*
  # Update products schema for Instagram-like display
  
  1. Changes
    - Remove price_type from products table
    - Add image_metadata for better image handling
    - Update existing products
  
  2. Security
    - Maintain existing RLS policies
*/

-- Add image_metadata column to products
ALTER TABLE products 
ADD COLUMN IF NOT EXISTS image_metadata jsonb DEFAULT '{}';

-- Remove price_type column (only if you want to remove it completely)
-- ALTER TABLE products DROP COLUMN IF EXISTS price_type;

-- Update existing products with new image metadata
UPDATE products
SET image_metadata = jsonb_build_object(
  'aspectRatio', '1:1',
  'dimensions', jsonb_build_object('width', 1080, 'height', 1080)
);

-- Create a function to get product images with metadata
CREATE OR REPLACE FUNCTION get_product_with_images(product_id uuid)
RETURNS jsonb
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN (
    SELECT jsonb_build_object(
      'product', row_to_json(p),
      'images', (
        SELECT jsonb_agg(row_to_json(pi))
        FROM product_images pi
        WHERE pi.product_id = p.id
        ORDER BY pi.display_order
      )
    )
    FROM products p
    WHERE p.id = product_id
  );
END;
$$;

-- Create a view for product gallery display
CREATE OR REPLACE VIEW product_gallery AS
SELECT 
  p.id,
  p.name,
  p.description,
  p.image_url as cover_image,
  p.image_metadata,
  (
    SELECT COUNT(*)
    FROM product_images pi
    WHERE pi.product_id = p.id
  ) as image_count,
  p.created_at
FROM products p
ORDER BY p.created_at DESC;

-- Add indexes for performance
CREATE INDEX IF NOT EXISTS idx_products_created_at ON products(created_at);
CREATE INDEX IF NOT EXISTS idx_product_images_product_order 
ON product_images(product_id, display_order);

-- Update product images table with metadata
ALTER TABLE product_images
ADD COLUMN IF NOT EXISTS metadata jsonb DEFAULT '{}'::jsonb,
ADD COLUMN IF NOT EXISTS dimensions jsonb DEFAULT '{"width": 1080, "height": 1080}'::jsonb;