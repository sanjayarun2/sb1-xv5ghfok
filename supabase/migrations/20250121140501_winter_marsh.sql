/*
  # Add Tamil Nadu Textile Companies
  
  This migration adds prominent Tamil Nadu textile companies to the trusted_brands table
*/

-- Insert TN textile companies
INSERT INTO trusted_brands (name, logo_url, website_url) VALUES
('KG Denim Limited', 'https://images.unsplash.com/photo-1633354931133-27ac1ee5d853?w=800', 'https://example.com/kgdenim'),
('Premier Mills', 'https://images.unsplash.com/photo-1618477462146-817b6e4d4a8f?w=800', 'https://example.com/premier'),
('Loyal Textile Mills', 'https://images.unsplash.com/photo-1565339119519-c9895a4e690f?w=800', 'https://example.com/loyal'),
('RSWM Limited', 'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800', 'https://example.com/rswm'),
('Kandagiri Spinning Mills', 'https://images.unsplash.com/photo-1618556451181-b1b1a8f9b8fe?w=800', 'https://example.com/kandagiri'),
('Precot Meridian', 'https://images.unsplash.com/photo-1618556451157-0df5ae985131?w=800', 'https://example.com/precot');