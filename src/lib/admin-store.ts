/*
 * A tiny browser database for the static admin demo.  It deliberately has the
 * same response shape as Axios (`{ data }`) so existing admin screens can be
 * used without a server. Data is deliberately in-memory: it is reset when the
 * page reloads, keeping the production bundle fully static.
 */

type RecordItem = Record<string, any>;
const seed = {
  categories: [
    { id: 1, name: 'Engine Parts', slug: 'engine-parts', image: '/placeholder.jpg', parent: null, parent_name: null, is_active: true, order: 1, product_count: 0 },
    { id: 2, name: 'Braking System', slug: 'braking-system', image: '/placeholder.jpg', parent: null, parent_name: null, is_active: true, order: 2, product_count: 0 },
    { id: 3, name: 'Filters', slug: 'filters', image: '/placeholder.jpg', parent: null, parent_name: null, is_active: true, order: 3, product_count: 0 },
    { id: 4, name: 'Suspension', slug: 'suspension', image: '/placeholder.jpg', parent: null, parent_name: null, is_active: true, order: 4, product_count: 0 },
    { id: 5, name: 'Electrical', slug: 'electrical', image: '/placeholder.jpg', parent: null, parent_name: null, is_active: true, order: 5, product_count: 0 },
  ],
  brands: [
    { id: 1, name: 'TurboMax', slug: 'turbomax', logo: '/placeholder.jpg', is_active: true, order: 1, product_count: 0 },
    { id: 2, name: 'GripZone', slug: 'gripzone', logo: '/placeholder.jpg', is_active: true, order: 2, product_count: 0 },
    { id: 3, name: 'AirSwift', slug: 'airswift', logo: '/placeholder.jpg', is_active: true, order: 3, product_count: 0 },
    { id: 4, name: 'RideControl', slug: 'ridecontrol', logo: '/placeholder.jpg', is_active: true, order: 4, product_count: 0 },
    { id: 5, name: 'SparkPlus', slug: 'sparkplus', logo: '/placeholder.jpg', is_active: true, order: 5, product_count: 0 },
  ],
  products: [
    { id: 1, name: 'TurboMax Synthetic Motor Oil 5W-30', slug: 'turbomax-synthetic-motor-oil-5w30', part_number: 'TMX-5W30-5L', description: 'Fully synthetic 5W-30 motor oil engineered for modern engines. Delivers excellent wear protection, thermal stability, and clean operation in extreme temperatures.', category: 1, brand: 1, price: 3200000, sale_price: 2850000, stock: 24, weight: '5.0', badge: 'sale', is_active: true, is_featured: true, created_at: '2026-02-01T09:00:00.000Z', images: [{ id: 1, image: '/placeholder.jpg', alt: 'TurboMax Synthetic Motor Oil 5W-30', is_main: true }] },
    { id: 2, name: 'GripZone Ceramic Disc Brake Pads', slug: 'gripzone-ceramic-disc-brake-pads', part_number: 'GZ-CDP-008', description: 'Ceramic disc brake pad set engineered for quiet, low-dust braking and consistent stopping power across daily and highway driving.', category: 2, brand: 2, price: 2450000, sale_price: null, stock: 18, weight: '1.6', badge: 'original', is_active: true, is_featured: true, created_at: '2026-02-05T09:00:00.000Z', images: [{ id: 1, image: '/placeholder.jpg', alt: 'GripZone Ceramic Disc Brake Pads', is_main: true }] },
    { id: 3, name: 'AirSwift High-Flow Cabin Filter', slug: 'airswift-high-flow-cabin-filter', part_number: 'AS-HFC-211', description: 'High-flow cabin air filter that traps dust, pollen, and pollutants while maintaining smooth HVAC airflow for a cleaner cabin.', category: 3, brand: 3, price: 520000, sale_price: 450000, stock: 60, weight: '0.4', badge: 'new', is_active: true, is_featured: false, created_at: '2026-02-10T09:00:00.000Z', images: [{ id: 1, image: '/placeholder.jpg', alt: 'AirSwift High-Flow Cabin Filter', is_main: true }] },
    { id: 4, name: 'RideControl Rear Shock Absorber', slug: 'ridecontrol-rear-shock-absorber', part_number: 'RC-RSA-505', description: 'Gas-charged rear shock absorber tuned for stable handling, improved ride comfort, and long service life under varied road conditions.', category: 4, brand: 4, price: 4200000, sale_price: 3750000, stock: 8, weight: '5.2', badge: 'hot', is_active: true, is_featured: true, created_at: '2026-02-15T09:00:00.000Z', images: [{ id: 1, image: '/placeholder.jpg', alt: 'RideControl Rear Shock Absorber', is_main: true }] },
    { id: 5, name: 'SparkPlus Iridium Spark Plug Set', slug: 'sparkplus-iridium-spark-plug-set', part_number: 'SP-IP-4P', description: 'Set of four iridium spark plugs designed for reliable ignition, efficient combustion, and extended replacement intervals.', category: 5, brand: 5, price: 1550000, sale_price: null, stock: 15, weight: '0.35', badge: 'new', is_active: true, is_featured: false, created_at: '2026-02-20T09:00:00.000Z', images: [{ id: 1, image: '/placeholder.jpg', alt: 'SparkPlus Iridium Spark Plug Set', is_main: true }] },
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
