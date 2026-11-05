/*
 * A tiny browser database for the static admin demo.  It deliberately has the
 * same response shape as Axios (`{ data }`) so existing admin screens can be
 * used without a server. Data is deliberately in-memory: it is reset when the
 * page reloads, keeping the production bundle fully static.
 */

type RecordItem = Record<string, any>;
const seed = {
  categories: [
    { id: 1, name: 'چراغ و بدنه', slug: 'light-body', image: '/چراغ و بدنه.png', parent: null, parent_name: null, is_active: true, order: 1, product_count: 0 },
    { id: 2, name: 'بدنه خودرو', slug: 'body-parts', image: '/چراغ و بدنه.png', parent: null, parent_name: null, is_active: true, order: 2, product_count: 0 },
    { id: 3, name: 'موتوری', slug: 'engine', image: '/موتوری.png', parent: null, parent_name: null, is_active: true, order: 3, product_count: 0 },
    { id: 4, name: 'سیستم تعلیق و جلوبندی', slug: 'suspension', image: '/سیستم تعلیق و جلوبندی.png', parent: null, parent_name: null, is_active: true, order: 4, product_count: 0 },
    { id: 5, name: 'سیستم ترمز ', slug: 'brake-system', image: '/سیستم ترمز.png', parent: null, parent_name: null, is_active: true, order: 5, product_count: 0 },
    { id: 6, name: 'سیستم الکتریکی و برق خودرو', slug: 'electrical', image: '/سیستم الکترونیک برق خودرو.png', parent: null, parent_name: null, is_active: true, order: 6, product_count: 0 },
    { id: 7, name: 'فیلترها', slug: 'filters', image: '/فیلتر ها.png', parent: null, parent_name: null, is_active: true, order: 7, product_count: 0 },
  ],
  brands: [
    { id: 1, name: 'کروز', slug: 'kroz', logo: '/کروز.png', is_active: true, order: 1, product_count: 0 },
    { id: 2, name: 'عظام', slug: 'ezam', logo: '/عظام.jpg', is_active: true, order: 2, product_count: 0 },
    { id: 3, name: 'جمع ساز', slug: 'jame-saz', logo: '/جمع ساز.jpg', is_active: true, order: 3, product_count: 0 },
    { id: 4, name: 'ایساکو', slug: 'isaco', logo: '/ایساکو.png', is_active: true, order: 4, product_count: 0 },
    { id: 5, name: 'مدرن', slug: 'modern', logo: '/مدرن.png', is_active: true, order: 5, product_count: 0 },
    { id: 6, name: 'ایران خودرو', slug: 'iran-khodro', logo: '/ایران خودرو.png', is_active: true, order: 6, product_count: 0 },
  ],
  products: [
    { id: 1, name: 'چراغ خطر رانا پلاس', slug: 'ranaplus-taillight', part_number: 'RN-TA-001', description: 'چراغ خطر رانا پلاس چپ', category: 1, brand: 1, price: 12000000, sale_price: 10000000, stock: 10, weight: '1.0', badge: 'sale', is_active: true, is_featured: true, created_at: '2026-02-01T09:00:00.000Z', images: [{ id: 1, image: '/چراغ خطر رانا پلاس.jpg', alt: 'چراغ خطر رانا پلاس', is_main: true }] },
    { id: 2, name: 'چراغ جلو پژو 207', slug: 'peugeot-207-headlight', part_number: 'P207-HL-001', description: 'چراغ جلو پژو 207 سمت چپ', category: 1, brand: 5, price: 8500000, sale_price: 7500000, stock: 15, weight: '1.2', badge: 'sale', is_active: true, is_featured: true, created_at: '2026-02-02T09:00:00.000Z', images: [{ id: 1, image: '/چراغ جلو 207.jpg', alt: 'چراغ جلو پژو 207', is_main: true }] },
    { id: 3, name: 'آینه بغل پژو پارس', slug: 'pars-mirror', part_number: 'PRS-MR-001', description: 'آینه بغل پژو پارس برقی سمت راست', category: 1, brand: 1, price: 6500000, sale_price: 5500000, stock: 20, weight: '0.8', badge: 'sale', is_active: true, is_featured: true, created_at: '2026-02-03T09:00:00.000Z', images: [{ id: 1, image: '/آینه بغل پژو پارس.png', alt: 'آینه بغل پژو پارس', is_main: true }] },
    { id: 4, name: 'سپر جلو پژو 207', slug: 'peugeot-207-front-bumper', part_number: 'P207-FB-001', description: 'سپر جلو پژو 207 مناسب مدل‌های جدید', category: 1, brand: 6, price: 15000000, sale_price: 13500000, stock: 8, weight: '4.5', badge: 'sale', is_active: true, is_featured: true, created_at: '2026-02-04T09:00:00.000Z', images: [{ id: 1, image: '/سپر جلو پژو 207.png', alt: 'سپر جلو پژو 207', is_main: true }] },
    { id: 5, name: 'چراغ عقب سمند', slug: 'samand-taillight', part_number: 'SMD-TL-001', description: 'چراغ خطر عقب سمند سمت راست', category: 1, brand: 1, price: 5800000, sale_price: 5000000, stock: 12, weight: '0.9', badge: 'sale', is_active: true, is_featured: false, created_at: '2026-02-05T09:00:00.000Z', images: [{ id: 1, image: '/چراغ عقب سمند.png', alt: 'چراغ عقب سمند', is_main: true }] },
    { id: 6, name: 'جلوپنجره دنا پلاس', slug: 'dena-plus-grille', part_number: 'DNA-GR-001', description: 'جلوپنجره دنا پلاس مشکی فابریک', category: 1, brand: 4, price: 7200000, sale_price: 6200000, stock: 10, weight: '1.5', badge: 'sale', is_active: true, is_featured: false, created_at: '2026-02-06T09:00:00.000Z', images: [{ id: 1, image: '/جلو پنجره دنا پلاس.png', alt: 'جلوپنجره دنا پلاس', is_main: true }] },
    { id: 7, name: 'چراغ جلو دنا پلاس', slug: 'dena-plus-headlight', part_number: 'DNA-HL-001', description: 'چراغ جلو دنا پلاس سمت راست', category: 1, brand: 1, price: 11000000, sale_price: 9500000, stock: 9, weight: '1.3', badge: 'sale', is_active: true, is_featured: true, created_at: '2026-02-07T09:00:00.000Z', images: [{ id: 1, image: '/چراغ جلو دنا پلاس.png', alt: 'چراغ جلو دنا پلاس', is_main: true }] },
    { id: 8, name: 'سپر عقب پژو 206', slug: 'peugeot-206-rear-bumper', part_number: 'P206-RB-001', description: 'سپر عقب پژو 206 هاچبک رنگ سفید', category: 1, brand: 6, price: 12500000, sale_price: 11000000, stock: 7, weight: '4.2', badge: 'sale', is_active: true, is_featured: false, created_at: '2026-02-08T09:00:00.000Z', images: [{ id: 1, image: '/سپر عقب پژو 207.png', alt: 'سپر عقب پژو 206', is_main: true }] },
    { id: 9, name: 'چراغ خطر عقب پژو پارس', slug: 'pars-taillight', part_number: 'PRS-TL-001', description: 'چراغ خطر عقب پژو پارس سمت چپ', category: 1, brand: 1, price: 6800000, sale_price: 5900000, stock: 14, weight: '0.9', badge: 'sale', is_active: true, is_featured: false, created_at: '2026-02-09T09:00:00.000Z', images: [{ id: 1, image: '/چراغ خطر پژو پارس.png', alt: 'چراغ خطر عقب پژو پارس', is_main: true }] },
    { id: 10, name: 'آینه بغل سمند', slug: 'samand-mirror', part_number: 'SMD-MR-001', description: 'آینه بغل سمند برقی سمت چپ', category: 1, brand: 4, price: 5700000, sale_price: 4900000, stock: 16, weight: '0.7', badge: 'sale', is_active: true, is_featured: false, created_at: '2026-02-10T09:00:00.000Z', images: [{ id: 1, image: '/آینه بغل سمند.png', alt: 'آینه بغل سمند', is_main: true }] },
    { id: 11, name: 'دستگیره درب پژو 405', slug: 'peugeot-405-handle', part_number: 'P405-HND-001', description: 'دستگیره بیرونی درب جلو پژو 405 مشکی', category: 2, brand: 1, price: 1800000, sale_price: 1500000, stock: 30, weight: '0.3', badge: 'sale', is_active: true, is_featured: false, created_at: '2026-02-11T09:00:00.000Z', images: [{ id: 1, image: '/دستگیره درب پژو 405.png', alt: 'دستگیره درب پژو 405', is_main: true }] },
  ], banners: [], posts: [], postCategories: [], orders: [], users: [], reviews: [],
};

const staticState: RecordItem = structuredClone(seed);
function db(): RecordItem {
  return staticState;
}
function save(_value: RecordItem) {
  void _value;
  // State is already mutated in memory. Intentionally do not persist it.
}
function response(data: any) { return Promise.resolve({ data }); }
function nextId(items: RecordItem[]) { return Math.max(0, ...items.map(item => Number(item.id) || 0)) + 1; }
function text(value: FormDataEntryValue | null) { return typeof value === 'string' ? value : ''; }
function bool(value: unknown, fallback = false) { return value === true || value === 'true' || (value == null ? fallback : false); }
async function fileData(file: FormDataEntryValue | null) {
  if (!(file instanceof File) || !file.size) return null;
  return new Promise<string>((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(String(reader.result)); reader.onerror = reject; reader.readAsDataURL(file); });
}
function productView(product: RecordItem, state = db()) {
  const category = state.categories.find((item: RecordItem) => item.id === Number(product.category));
  const brand = state.brands.find((item: RecordItem) => item.id === Number(product.brand));
  const images = product.images || [];
  const main_image = images.find((image: RecordItem) => image.is_main) || images[0] || null;
  const price = Number(product.price || 0), sale = product.sale_price == null || product.sale_price === '' ? null : Number(product.sale_price);
  return { ...product, price, sale_price: sale, stock: Number(product.stock || 0), effective_price: sale || price,
    category_name: category?.name || '-', brand_name: brand?.name || '-', main_image };
}
function formObject(form: FormData) { return Object.fromEntries(Array.from(form.entries()).filter(([, value]) => typeof value === 'string')) as RecordItem; }

export const staticAdminApi = {
  stats: () => {
    const state = db(), products = state.products.map((item: RecordItem) => productView(item, state));
    const total = products.reduce((sum: number, item: RecordItem) => sum + item.effective_price, 0);
    return response({ total_orders: state.orders.length, total_revenue: total, total_products: products.filter((p: RecordItem) => p.is_active).length,
      total_users: state.users.length, month_orders: 0, month_revenue: total, revenue_growth: 0,
      low_stock_count: products.filter((p: RecordItem) => p.stock <= 5).length, pending_orders: 0,
      daily_revenue: Array.from({ length: 7 }, (_, i) => ({ date: `${i + 1}`, revenue: 0 })), status_counts: {}, recent_orders: [] });
  },
  categories: () => response(db().categories.map((category: RecordItem) => ({ ...category, parent_name: db().categories.find((p: RecordItem) => p.id === category.parent)?.name || null, product_count: db().products.filter((p: RecordItem) => Number(p.category) === category.id).length }))),
  category: (id: number) => response(db().categories.find((item: RecordItem) => item.id === id)),
  createCategory: async (form: FormData) => {
    const state = db(), data = formObject(form), item = { id: nextId(state.categories), name: data.name, slug: data.slug, parent: data.parent ? Number(data.parent) : null, is_active: bool(data.is_active, true), order: Number(data.order || 0), image: await fileData(form.get('image')) };
    state.categories.push(item); save(state); return { data: item };
  },
  updateCategory: async (id: number, payload: FormData | RecordItem) => {
    const state = db(), item = state.categories.find((x: RecordItem) => x.id === id); if (!item) throw new Error('Category not found');
    const data = payload instanceof FormData ? formObject(payload) : payload; Object.assign(item, data);
    if ('parent' in data) item.parent = data.parent ? Number(data.parent) : null;
    if ('order' in data) item.order = Number(data.order); if ('is_active' in data) item.is_active = bool(data.is_active);
    if (payload instanceof FormData) { const image = await fileData(payload.get('image')); if (image) item.image = image; }
    save(state); return { data: item };
  },
  deleteCategory: (id: number) => { const state = db(); state.categories = state.categories.filter((x: RecordItem) => x.id !== id); save(state); return response({}); },
  brands: (params?: RecordItem) => { const state = db(), search = String(params?.search || '').toLowerCase(); return response(state.brands.filter((x: RecordItem) => !search || x.name.toLowerCase().includes(search)).map((x: RecordItem) => ({ ...x, product_count: state.products.filter((p: RecordItem) => Number(p.brand) === x.id).length }))); },
  brand: (id: number) => response(db().brands.find((item: RecordItem) => item.id === id)),
  createBrand: async (form: FormData) => { const state = db(), data = formObject(form), item = { id: nextId(state.brands), name: data.name, slug: data.slug, is_active: bool(data.is_active, true), order: Number(data.order || 0), logo: await fileData(form.get('logo')) }; state.brands.push(item); save(state); return { data: item }; },
  updateBrand: async (id: number, payload: FormData | RecordItem) => { const state = db(), item = state.brands.find((x: RecordItem) => x.id === id); if (!item) throw new Error('Brand not found'); const data = payload instanceof FormData ? formObject(payload) : payload; Object.assign(item, data); if ('order' in data) item.order = Number(data.order); if ('is_active' in data) item.is_active = bool(data.is_active); if (payload instanceof FormData) { const logo = await fileData(payload.get('logo')); if (logo) item.logo = logo; } save(state); return { data: item }; },
  deleteBrand: (id: number) => { const state = db(); state.brands = state.brands.filter((x: RecordItem) => x.id !== id); save(state); return response({}); },
  products: (params: RecordItem = {}) => { const state = db(); let items = state.products.map((item: RecordItem) => productView(item, state)); const search = String(params.search || '').toLowerCase(); if (search) items = items.filter((item: RecordItem) => `${item.name} ${item.part_number || ''}`.toLowerCase().includes(search)); if (params.is_active !== undefined && params.is_active !== '') items = items.filter((item: RecordItem) => item.is_active === bool(params.is_active)); if (params.badge) items = items.filter((item: RecordItem) => item.badge === params.badge); return response({ count: items.length, results: items }); },
  product: (id: number) => { const product = db().products.find((item: RecordItem) => item.id === id); return response(product ? productView(product) : null); },
  createProduct: (data: RecordItem) => { const state = db(), item = { ...data, id: nextId(state.products), category: data.category ? Number(data.category) : null, brand: data.brand ? Number(data.brand) : null, price: Number(data.price), stock: Number(data.stock || 0), sale_price: data.sale_price == null ? null : Number(data.sale_price), images: [], created_at: new Date().toISOString() }; state.products.unshift(item); save(state); return response(productView(item, state)); },
  updateProduct: (id: number, data: RecordItem) => { const state = db(), item = state.products.find((x: RecordItem) => x.id === id); if (!item) return Promise.reject(new Error('Product not found')); Object.assign(item, data); if ('category' in data) item.category = data.category ? Number(data.category) : null; if ('brand' in data) item.brand = data.brand ? Number(data.brand) : null; if ('price' in data) item.price = Number(data.price); if ('stock' in data) item.stock = Number(data.stock); if ('sale_price' in data) item.sale_price = data.sale_price == null ? null : Number(data.sale_price); save(state); return response(productView(item, state)); },
  deleteProduct: (id: number) => { const state = db(); state.products = state.products.filter((x: RecordItem) => x.id !== id); save(state); return response({}); },
  uploadProductImage: async (id: number, form: FormData) => { const state = db(), product = state.products.find((x: RecordItem) => x.id === id); if (!product) throw new Error('Product not found'); const image = await fileData(form.get('image')); if (!image) throw new Error('Image is required'); const images = product.images || (product.images = []); const item = { id: nextId(images), image, alt: text(form.get('alt')), is_main: images.length === 0 || bool(text(form.get('is_main'))) }; if (item.is_main) images.forEach((x: RecordItem) => x.is_main = false); images.push(item); save(state); return { data: item }; },
  setMainProductImage: (id: number, imageId: number) => { const state = db(), product = state.products.find((x: RecordItem) => x.id === id); product?.images?.forEach((x: RecordItem) => x.is_main = x.id === imageId); save(state); return response({}); },
  deleteProductImage: (id: number, imageId: number) => { const state = db(), product = state.products.find((x: RecordItem) => x.id === id); if (product) { product.images = (product.images || []).filter((x: RecordItem) => x.id !== imageId); if (product.images[0] && !product.images.some((x: RecordItem) => x.is_main)) product.images[0].is_main = true; } save(state); return response({}); },
  // The remaining sections are also local collections, keeping every admin route usable in a static build.
  orders: (params?: RecordItem) => { void params; return response({ count: db().orders.length, results: db().orders }); }, order: (id: number) => response(db().orders.find((x: RecordItem) => x.id === id)), updateOrder: (id: number, data: RecordItem) => updateCollection('orders', id, data),
  users: (params?: RecordItem) => { void params; return response({ count: db().users.length, results: db().users }); }, user: (id: number) => response(db().users.find((x: RecordItem) => x.id === id)), updateUser: (id: number, data: RecordItem) => updateCollection('users', id, data),
  posts: (params?: RecordItem) => { void params; return response({ count: db().posts.length, results: db().posts }); }, post: (id: number) => response(db().posts.find((x: RecordItem) => x.id === id)), createPost: (form: FormData) => createFormCollection('posts', form), updatePost: (id: number, data: FormData | RecordItem) => updateFormCollection('posts', id, data), deletePost: (id: number) => deleteCollection('posts', id),
  postCategories: () => response(db().postCategories), createPostCategory: (data: RecordItem) => createCollection('postCategories', data),
  banners: () => response(db().banners), createBanner: (form: FormData) => createFormCollection('banners', form), updateBanner: (id: number, data: FormData | RecordItem) => updateFormCollection('banners', id, data), deleteBanner: (id: number) => deleteCollection('banners', id),
  reviews: (params?: RecordItem) => { void params; return response({ count: db().reviews.length, results: db().reviews }); }, approveReview: (id: number, is_approved: boolean) => updateCollection('reviews', id, { is_approved }), deleteReview: (id: number) => deleteCollection('reviews', id),
};

function createCollection(collection: string, data: RecordItem) { const state = db(), item = { ...data, id: nextId(state[collection]) }; state[collection].unshift(item); save(state); return response(item); }
async function createFormCollection(collection: string, form: FormData) { const data = formObject(form); const image = await fileData(form.get('image') || form.get('thumbnail')); return createCollection(collection, { ...data, ...(image ? { image } : {}) }); }
function updateCollection(collection: string, id: number, data: RecordItem) { const state = db(), item = state[collection].find((x: RecordItem) => x.id === id); if (!item) return Promise.reject(new Error('Item not found')); Object.assign(item, data); save(state); return response(item); }
async function updateFormCollection(collection: string, id: number, payload: FormData | RecordItem) { const data = payload instanceof FormData ? formObject(payload) : payload; if (payload instanceof FormData) { const image = await fileData(payload.get('image') || payload.get('thumbnail')); if (image) data.image = image; } return updateCollection(collection, id, data); }
function deleteCollection(collection: string, id: number) { const state = db(); state[collection] = state[collection].filter((x: RecordItem) => x.id !== id); save(state); return response({}); }
