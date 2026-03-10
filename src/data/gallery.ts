export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  caption: string;
  productLink?: string;
  processLink?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'plain-box',
    image: '/plain box.webp',
    alt: 'Plain saree box with clean white finish and golden accent',
    caption: 'Plain saree box — clean finish, ideal for wholesale packaging',
    productLink: '/product/plain-saree-box',
  },
  {
    id: 'printed-box',
    image: '/Printed box.webp',
    alt: 'Printed saree box with full-colour traditional design',
    caption: 'Printed saree box — full-colour offset with gloss BOPP lamination',
    productLink: '/product/printed-saree-box',
    processLink: '/process/gloss-lamination',
  },
  {
    id: 'customized-box',
    image: '/Customized printed box.webp',
    alt: 'Customized printed saree box with metallic accents for retail display',
    caption: 'Custom printed box — metallic accents and brand-specific design',
    productLink: '/product/customized-saree-box',
  },
  {
    id: 'luxury-box',
    image: '/Printed box 2.webp',
    alt: 'Luxury saree paper box with premium full-colour printing',
    caption: 'Luxury saree paper box — premium finish for gift and retail',
    productLink: '/product/luxury-saree-paper-box',
    processLink: '/process/matte-lamination',
  },
  {
    id: 'jptex-box',
    image: '/JP tex.webp',
    alt: 'Custom designed saree box with brand-focused high-quality printing',
    caption: 'Brand-focused custom designed box — high-quality print and foil logo',
    productLink: '/product/custom-designed-saree-box',
  },
  {
    id: 'storage-carton',
    image: '/4box.webp',
    alt: 'Saree storage bags and heavy-duty corrugated cartons for industrial shipping',
    caption: 'Industrial corrugated cartons — heavy-duty for wholesale shipping',
    productLink: '/product/saree-storage-bags-cartons',
  },
  {
    id: 'corrugated-box',
    image: '/corrugated box2.webp',
    alt: 'Durable corrugated storage box alternative to standard blushbees boxes',
    caption: 'Corrugated storage box — sturdier alternative for warehouse use',
    productLink: '/product/blushbees-storage-boxes-alternative',
  },
];
