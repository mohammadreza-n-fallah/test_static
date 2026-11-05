import type { Brand, Category, HomepageData, PaginatedResponse, Product } from '@/types';

// Single source of truth for the static storefront catalog.
export const catalogCategories: Category[] = [
  { id: 1, name: 'چراغ و بدنه', slug: 'light-body', image: '/چراغ و بدنه.png', description: 'چراغ، آینه، سپر و قطعات بدنه خودرو', parent: null, children: [] },
  { id: 2, name: 'بدنه خودرو', slug: 'body-parts', image: '/چراغ و بدنه.png', description: 'دستگیره، پنجره و قطعات بدنه', parent: null, children: [] },
  { id: 3, name: 'موتوری', slug: 'engine', image: '/موتوری.png', description: 'قطعات موتور و سیستم‌های مرتبط', parent: null, children: [] },
  { id: 4, name: 'سیستم تعلیق و جلوبندی', slug: 'suspension', image: '/سیستم تعلیق و جلوبندی.png', description: 'کمک‌فنر، کمک جلو، قطعات جلوبندی', parent: null, children: [] },
  { id: 5, name: 'سیستم ترمز ', slug: 'brake-system', image: '/سیستم ترمز.png', description: 'لنت ترمز، دیسک، کالیپر و سیستم ترمز', parent: null, children: [] },
  { id: 6, name: 'سیستم الکتریکی و برق خودرو', slug: 'electrical', image: '/سیستم الکترونیک برق خودرو.png', description: 'باتری، سیم‌کشی، سنسورها و قطعات برقی', parent: null, children: [] },
  { id: 7, name: 'فیلترها', slug: 'filters', image: '/فیلتر ها.png', description: 'فیلتر هوا، روغن، کابین و سوخت', parent: null, children: [] },
];

export const catalogBrands: Brand[] = [
  { id: 1, name: 'کروز', slug: 'kroz', logo: '/placeholder.jpg' },
  { id: 2, name: 'عظام', slug: 'ezam', logo: '/placeholder.jpg' },
  { id: 3, name: 'جمع ساز', slug: 'jame-saz', logo: '/placeholder.jpg' },
  { id: 4, name: 'ایساکو', slug: 'isaco', logo: '/ایساکو.png' },
  { id: 5, name: 'مدرن', slug: 'modern', logo: '/placeholder.jpg' },
  { id: 6, name: 'ایران خودرو', slug: 'iran-khodro', logo: '/ایران خودرو.png' },
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
  makeProduct({ id: 1, name: 'چراغ خطر رانا پلاس', slug: 'ranaplus-taillight', part_number: 'RN-TA-001', description: 'چراغ خطر رانا پلاس چپ', short_description: 'چراغ خطر رانا پلاس چپ', price: 12000000, sale_price: 10000000, stock: 10, badge: 'sale', is_featured: true, category_name: 'چراغ و بدنه', category_slug: 'light-body', brand_name: 'کروز', brand_slug: 'kroz', main_image: { id: 1, image: '/چراغ خطر رانا پلاس.jpg', alt: 'چراغ خطر رانا پلاس', is_main: true, order: 0 }, images: [{ id: 1, image: '/چراغ خطر رانا پلاس.jpg', alt: 'چراغ خطر رانا پلاس', is_main: true, order: 0 }] }),
  makeProduct({ id: 2, name: 'چراغ جلو پژو 207', slug: 'peugeot-207-headlight', part_number: 'P207-HL-001', description: 'چراغ جلو پژو 207 سمت چپ', short_description: 'چراغ جلو پژو 207 سمت چپ', price: 8500000, sale_price: 7500000, stock: 15, badge: 'sale', is_featured: true, category_name: 'چراغ و بدنه', category_slug: 'light-body', brand_name: 'مدرن', brand_slug: 'modern', main_image: { id: 2, image: '/چراغ جلو 207.jpg', alt: 'چراغ جلو پژو 207', is_main: true, order: 0 }, images: [{ id: 2, image: '/چراغ جلو 207.jpg', alt: 'چراغ جلو پژو 207', is_main: true, order: 0 }] }),
  makeProduct({ id: 3, name: 'آینه بغل پژو پارس', slug: 'pars-mirror', part_number: 'PRS-MR-001', description: 'آینه بغل پژو پارس برقی سمت راست', short_description: 'آینه بغل پژو پارس برقی سمت راست', price: 6500000, sale_price: 5500000, stock: 20, badge: 'sale', is_featured: true, category_name: 'چراغ و بدنه', category_slug: 'light-body', brand_name: 'کروز', brand_slug: 'kroz', main_image: { id: 3, image: '/آینه بغل پژو پارس.png', alt: 'آینه بغل پژو پارس', is_main: true, order: 0 }, images: [{ id: 3, image: '/آینه بغل پژو پارس.png', alt: 'آینه بغل پژو پارس', is_main: true, order: 0 }] }),
  makeProduct({ id: 4, name: 'سپر جلو پژو 207', slug: 'peugeot-207-front-bumper', part_number: 'P207-FB-001', description: 'سپر جلو پژو 207 مناسب مدل‌های جدید', short_description: 'سپر جلو پژو 207 مناسب مدل‌های جدید', price: 15000000, sale_price: 13500000, stock: 8, badge: 'sale', is_featured: true, category_name: 'چراغ و بدنه', category_slug: 'light-body', brand_name: 'ایران خودرو', brand_slug: 'iran-khodro', main_image: { id: 4, image: '/سپر جلو پژو 207.png', alt: 'سپر جلو پژو 207', is_main: true, order: 0 }, images: [{ id: 4, image: '/سپر جلو پژو 207.png', alt: 'سپر جلو پژو 207', is_main: true, order: 0 }] }),
  makeProduct({ id: 5, name: 'چراغ عقب سمند', slug: 'samand-taillight', part_number: 'SMD-TL-001', description: 'چراغ خطر عقب سمند سمت راست', short_description: 'چراغ خطر عقب سمند سمت راست', price: 5800000, sale_price: 5000000, stock: 12, badge: 'sale', is_featured: false, category_name: 'چراغ و بدنه', category_slug: 'light-body', brand_name: 'کروز', brand_slug: 'kroz', main_image: { id: 5, image: '/چراغ عقب سمند.png', alt: 'چراغ عقب سمند', is_main: true, order: 0 }, images: [{ id: 5, image: '/چراغ عقب سمند.png', alt: 'چراغ عقب سمند', is_main: true, order: 0 }] }),
  makeProduct({ id: 6, name: 'جلوپنجره دنا پلاس', slug: 'dena-plus-grille', part_number: 'DNA-GR-001', description: 'جلوپنجره دنا پلاس مشکی فابریک', short_description: 'جلوپنجره دنا پلاس مشکی فابریک', price: 7200000, sale_price: 6200000, stock: 10, badge: 'sale', is_featured: false, category_name: 'چراغ و بدنه', category_slug: 'light-body', brand_name: 'ایساکو', brand_slug: 'isaco', main_image: { id: 6, image: '/جلو پنجره دنا پلاس.png', alt: 'جلوپنجره دنا پلاس', is_main: true, order: 0 }, images: [{ id: 6, image: '/جلو پنجره دنا پلاس.png', alt: 'جلوپنجره دنا پلاس', is_main: true, order: 0 }] }),
  makeProduct({ id: 7, name: 'چراغ جلو دنا پلاس', slug: 'dena-plus-headlight', part_number: 'DNA-HL-001', description: 'چراغ جلو دنا پلاس سمت راست', short_description: 'چراغ جلو دنا پلاس سمت راست', price: 11000000, sale_price: 9500000, stock: 9, badge: 'sale', is_featured: true, category_name: 'چراغ و بدنه', category_slug: 'light-body', brand_name: 'کروز', brand_slug: 'kroz', main_image: { id: 7, image: '/چراغ جلو دنا پلاس.png', alt: 'چراغ جلو دنا پلاس', is_main: true, order: 0 }, images: [{ id: 7, image: '/چراغ جلو دنا پلاس.png', alt: 'چراغ جلو دنا پلاس', is_main: true, order: 0 }] }),
  makeProduct({ id: 8, name: 'سپر عقب پژو 206', slug: 'peugeot-206-rear-bumper', part_number: 'P206-RB-001', description: 'سپر عقب پژو 206 هاچبک رنگ سفید', short_description: 'سپر عقب پژو 206 هاچبک رنگ سفید', price: 12500000, sale_price: 11000000, stock: 7, badge: 'sale', is_featured: false, category_name: 'چراغ و بدنه', category_slug: 'light-body', brand_name: 'ایران خودرو', brand_slug: 'iran-khodro', main_image: { id: 8, image: '/سپر عقب پژو 207.png', alt: 'سپر عقب پژو 206', is_main: true, order: 0 }, images: [{ id: 8, image: '/سپر عقب پژو 207.png', alt: 'سپر عقب پژو 206', is_main: true, order: 0 }] }),
  makeProduct({ id: 9, name: 'چراغ خطر عقب پژو پارس', slug: 'pars-taillight', part_number: 'PRS-TL-001', description: 'چراغ خطر عقب پژو پارس سمت چپ', short_description: 'چراغ خطر عقب پژو پارس سمت چپ', price: 6800000, sale_price: 5900000, stock: 14, badge: 'sale', is_featured: false, category_name: 'چراغ و بدنه', category_slug: 'light-body', brand_name: 'کروز', brand_slug: 'kroz', main_image: { id: 9, image: '/چراغ خطر پژو پارس.png', alt: 'چراغ خطر عقب پژو پارس', is_main: true, order: 0 }, images: [{ id: 9, image: '/چراغ خطر پژو پارس.png', alt: 'چراغ خطر عقب پژو پارس', is_main: true, order: 0 }] }),
  makeProduct({ id: 10, name: 'آینه بغل سمند', slug: 'samand-mirror', part_number: 'SMD-MR-001', description: 'آینه بغل سمند برقی سمت چپ', short_description: 'آینه بغل سمند برقی سمت چپ', price: 5700000, sale_price: 4900000, stock: 16, badge: 'sale', is_featured: false, category_name: 'چراغ و بدنه', category_slug: 'light-body', brand_name: 'ایساکو', brand_slug: 'isaco', main_image: { id: 10, image: '/آینه بغل سمند.png', alt: 'آینه بغل سمند', is_main: true, order: 0 }, images: [{ id: 10, image: '/آینه بغل سمند.png', alt: 'آینه بغل سمند', is_main: true, order: 0 }] }),
  makeProduct({ id: 11, name: 'دستگیره درب پژو 405', slug: 'peugeot-405-handle', part_number: 'P405-HND-001', description: 'دستگیره بیرونی درب جلو پژو 405 مشکی', short_description: 'دستگیره بیرونی درب جلو پژو 405 مشکی', price: 1800000, sale_price: 1500000, stock: 30, badge: 'sale', is_featured: false, category_name: 'بدنه خودرو', category_slug: 'body-parts', brand_name: 'کروز', brand_slug: 'kroz', main_image: { id: 11, image: '/دستگیره درب پژو 405.png', alt: 'دستگیره درب پژو 405', is_main: true, order: 0 }, images: [{ id: 11, image: '/دستگیره درب پژو 405.png', alt: 'دستگیره درب پژو 405', is_main: true, order: 0 }] }),
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
