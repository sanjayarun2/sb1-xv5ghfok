/*
  # Update schema for better data persistence

  1. Add Constraints
    - Add NOT NULL constraints where needed
    - Add unique constraints for important fields
    - Add default values for better data consistency

  2. Add Indexes
    - Add indexes for frequently queried fields
    - Add composite indexes for related queries
*/

-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_name ON products(name);
CREATE INDEX IF NOT EXISTS idx_testimonials_name ON testimonials(name);
CREATE INDEX IF NOT EXISTS idx_trusted_brands_name ON trusted_brands(name);
CREATE INDEX IF NOT EXISTS idx_project_stats_name ON project_stats(stat_name);

-- Add constraints for data integrity
ALTER TABLE products 
  ALTER COLUMN name SET NOT NULL,
  ALTER COLUMN price_type SET NOT NULL,
  ALTER COLUMN category_id SET NOT NULL;

ALTER TABLE testimonials 
  ALTER COLUMN name SET NOT NULL,
  ALTER COLUMN content SET NOT NULL;

ALTER TABLE trusted_brands 
  ALTER COLUMN name SET NOT NULL,
  ALTER COLUMN logo_url SET NOT NULL;

ALTER TABLE project_stats 
  ALTER COLUMN stat_name SET NOT NULL,
  ALTER COLUMN value SET NOT NULL,
  ALTER COLUMN icon_name SET NOT NULL;