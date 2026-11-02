import type { Brand, Category, HomepageData, PaginatedResponse, Product } from '@/types';

// Single source of truth for the static storefront catalog.
export const catalogCategories: Category[] = [
  { id: 1, name: 'Engine Parts', slug: 'engine-parts', image: '/placeholder.jpg', description: 'Maintenance parts that help keep engines running smoothly.', parent: null, children: [] },
  { id: 2, name: 'Braking System', slug: 'braking-system', image: '/placeholder.jpg', description: 'Reliable braking components for everyday driving.', parent: null, children: [] },
  { id: 3, name: 'Filters', slug: 'filters', image: '/placeholder.jpg', description: 'Replacement filters for clean air and efficient operation.', parent: null, children: [] },
  { id: 4, name: 'Suspension', slug: 'suspension', image: '/placeholder.jpg', description: 'Suspension parts for a controlled and comfortable ride.', parent: null, children: [] },
  { id: 5, name: 'Electrical', slug: 'electrical', image: '/placeholder.jpg', description: 'Essential ignition and electrical replacement parts.', parent: null, children: [] },
];

export const catalogBrands: Brand[] = [
  { id: 1, name: 'TurboMax', slug: 'turbomax', logo: '/placeholder.jpg' },
  { id: 2, name: 'GripZone', slug: 'gripzone', logo: '/placeholder.jpg' },
  { id: 3, name: 'AirSwift', slug: 'airswift', logo: '/placeholder.jpg' },
  { id: 4, name: 'RideControl', slug: 'ridecontrol', logo: '/placeholder.jpg' },
  { id: 5, name: 'SparkPlus', slug: 'sparkplus', logo: '/placeholder.jpg' },
];

const makeProduct = (data: Omit<Product, 'effective_price' | 'discount_percent' | 'is_in_stock' | 'average_rating' | 'review_count'>): Product => {
  const effective_price = data.sale_price ?? data.price;
  return {
    ...data,
    effective_price,
    discount_percent: data.sale_price ? Math.round((1 - data.sale_price / data.price) * 100) : 0,
    is_in_stock: data.stock > 0,
    average_rating: 0,
    review_count: 0,
  };
};

export const catalogProducts: Product[] = [
  makeProduct({ id: 1, name: 'TurboMax Synthetic Motor Oil 5W-30', slug: 'turbomax-synthetic-motor-oil-5w30', part_number: 'TMX-5W30-5L', description: 'Fully synthetic 5W-30 motor oil engineered for modern engines. Delivers excellent wear protection, thermal stability, and clean operation in extreme temperatures.', short_description: 'Fully synthetic 5W-30 motor oil in a 5 litre bottle.', price: 3200000, sale_price: 2850000, stock: 24, badge: 'sale', is_featured: true, category_name: 'Engine Parts', category_slug: 'engine-parts', brand_name: 'TurboMax', brand_slug: 'turbomax', main_image: { id: 1, image: '/placeholder.jpg', alt: 'TurboMax Synthetic Motor Oil 5W-30', is_main: true, order: 0 }, images: [{ id: 1, image: '/placeholder.jpg', alt: 'TurboMax Synthetic Motor Oil 5W-30', is_main: true, order: 0 }] }),
  makeProduct({ id: 2, name: 'GripZone Ceramic Disc Brake Pads', slug: 'gripzone-ceramic-disc-brake-pads', part_number: 'GZ-CDP-008', description: 'Ceramic disc brake pad set engineered for quiet, low-dust braking and consistent stopping power across daily and highway driving.', short_description: 'Quiet, low-dust ceramic brake pads for the front axle.', price: 2450000, sale_price: null, stock: 18, badge: 'original', is_featured: true, category_name: 'Braking System', category_slug: 'braking-system', brand_name: 'GripZone', brand_slug: 'gripzone', main_image: { id: 2, image: '/placeholder.jpg', alt: 'GripZone Ceramic Disc Brake Pads', is_main: true, order: 0 }, images: [{ id: 2, image: '/placeholder.jpg', alt: 'GripZone Ceramic Disc Brake Pads', is_main: true, order: 0 }] }),
  makeProduct({ id: 3, name: 'AirSwift High-Flow Cabin Filter', slug: 'airswift-high-flow-cabin-filter', part_number: 'AS-HFC-211', description: 'High-flow cabin air filter that traps dust, pollen, and pollutants while maintaining smooth HVAC airflow for a cleaner cabin.', short_description: 'High-flow cabin air filter for cleaner cabin air.', price: 520000, sale_price: 450000, stock: 60, badge: 'new', is_featured: false, category_name: 'Filters', category_slug: 'filters', brand_name: 'AirSwift', brand_slug: 'airswift', main_image: { id: 3, image: '/placeholder.jpg', alt: 'AirSwift High-Flow Cabin Filter', is_main: true, order: 0 }, images: [{ id: 3, image: '/placeholder.jpg', alt: 'AirSwift High-Flow Cabin Filter', is_main: true, order: 0 }] }),
  makeProduct({ id: 4, name: 'RideControl Rear Shock Absorber', slug: 'ridecontrol-rear-shock-absorber', part_number: 'RC-RSA-505', description: 'Gas-charged rear shock absorber tuned for stable handling, improved ride comfort, and long service life under varied road conditions.', short_description: 'Gas-charged rear shock absorber for stable handling.', price: 4200000, sale_price: 3750000, stock: 8, badge: 'hot', is_featured: true, category_name: 'Suspension', category_slug: 'suspension', brand_name: 'RideControl', brand_slug: 'ridecontrol', main_image: { id: 4, image: '/placeholder.jpg', alt: 'RideControl Rear Shock Absorber', is_main: true, order: 0 }, images: [{ id: 4, image: '/placeholder.jpg', alt: 'RideControl Rear Shock Absorber', is_main: true, order: 0 }] }),
  makeProduct({ id: 5, name: 'SparkPlus Iridium Spark Plug Set', slug: 'sparkplus-iridium-spark-plug-set', part_number: 'SP-IP-4P', description: 'Set of four iridium spark plugs designed for reliable ignition, efficient combustion, and extended replacement intervals.', short_description: 'Four iridium spark plugs for dependable ignition.', price: 1550000, sale_price: null, stock: 15, badge: 'new', is_featured: false, category_name: 'Electrical', category_slug: 'electrical', brand_name: 'SparkPlus', brand_slug: 'sparkplus', main_image: { id: 5, image: '/placeholder.jpg', alt: 'SparkPlus Iridium Spark Plug Set', is_main: true, order: 0 }, images: [{ id: 5, image: '/placeholder.jpg', alt: 'SparkPlus Iridium Spark Plug Set', is_main: true, order: 0 }] }),
];

export function getCatalogProduct(slug: string) { return catalogProducts.find(product => product.slug === slug) ?? null; }
export function getCatalogCategory(slug: string) { return catalogCategories.find(category => category.slug === slug) ?? null; }

export function getCatalogProducts(params: Record<string, string | undefined> = {}): PaginatedResponse<Product> {
  let results = [...catalogProducts];
  if (params.category) results = results.filter(product => product.category_slug === params.category);
  if (params.brand) results = results.filter(product => product.brand_slug === params.brand);
  if (params.badge) results = results.filter(product => product.badge === params.badge);
  if (params.search) { const query = params.search.toLowerCase(); results = results.filter(product => `${product.name} ${product.part_number}`.toLowerCase().includes(query)); }
  if (params.in_stock === 'true') results = results.filter(product => product.is_in_stock);
  if (params.min_price) results = results.filter(product => product.effective_price >= Number(params.min_price));
  if (params.max_price) results = results.filter(product => product.effective_price <= Number(params.max_price));
  if (params.ordering === 'price') results.sort((a, b) => a.effective_price - b.effective_price);
  if (params.ordering === '-price') results.sort((a, b) => b.effective_price - a.effective_price);
  const page = Math.max(1, Number(params.page || 1));
  const start = (page - 1) * 10;
  return { count: results.length, next: start + 10 < results.length ? String(page + 1) : null, previous: page > 1 ? String(page - 1) : null, results: results.slice(start, start + 10) };
}

export function getCatalogHomepage(): HomepageData {
  return { featured_products: catalogProducts.filter(product => product.is_featured), on_sale_products: catalogProducts.filter(product => product.sale_price), new_arrivals: [...catalogProducts], categories: catalogCategories, brands: catalogBrands, banners: [], recent_posts: [] };
}
