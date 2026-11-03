import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import ProductGrid from '@/components/shop/ProductGrid';
import { catalogCategories, getCatalogCategory, getCatalogProducts } from '@/lib/catalog';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://autoparts.ir';

export async function generateStaticParams() {
  return catalogCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const cat = catalogCategories.find(c => c.slug === slug);
  if (!cat) return { title: 'دسته‌بندی' };
  const title = `خرید ${cat.name} | قطعات خودرو`;
  const description = cat.description ? cat.description.slice(0, 155) : `خرید انواع ${cat.name} با بهترین قیمت و ضمانت اصالت.`;
  return {
    title,
    description,
    keywords: [cat.name, 'قطعات خودرو', 'لوازم یدکی'],
    openGraph: { title, description, type: 'website', url: `/category/${slug}` },
    alternates: { canonical: `/category/${slug}` },
  };
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const category = getCatalogCategory(slug);
  if (!category) notFound();

  const { results, count } = getCatalogProducts({ category: slug });

  const breadcrumbItems = [
    { label: 'خانه', href: '/' },
    { label: 'فروشگاه', href: '/shop' },
    { label: category.name },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.label,
      ...(item.href && { item: `${SITE_URL}${item.href}` }),
    })),
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <JsonLd data={breadcrumbSchema} />
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex gap-6 mt-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-4 bg-white rounded-xl border border-border-color p-3 gap-3 flex-wrap">
            <div>
              <h1 className="font-bold text-dark-2 text-base">{category.name}</h1>
              <span className="text-xs text-muted">{count} محصول</span>
            </div>
          </div>

          {!results.length ? (
            <div className="text-center py-20 card p-10">
              <div className="text-5xl mb-4">🔍</div>
              <h2 className="font-bold text-dark-2 mb-2">محصولی یافت نشد</h2>
              <p className="text-sm text-muted mb-4">دسته‌بندی خالی است.</p>
              <Link href="/shop" className="btn-primary inline-block px-6 text-sm">همه محصولات</Link>
            </div>
          ) : (
            <ProductGrid products={results} />
          )}
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        <Link href="/shop" className="btn-outline px-8">بازگشت به فروشگاه</Link>
      </div>
    </div>
  );
}
