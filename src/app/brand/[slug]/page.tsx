import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import ProductCard from '@/components/shop/ProductCard';
import { catalogBrands, catalogProducts } from '@/lib/catalog';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://autoparts.ir';

export async function generateStaticParams() {
  return catalogBrands.map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const brand = catalogBrands.find(b => b.slug === slug);
  if (!brand) return { title: 'برند' };
  const title = `خرید محصولات ${brand.name} | قطعات خودرو`;
  const description = `خرید انواع محصولات ${brand.name} با بهترین قیمت و ضمانت اصالت.`;
  return {
    title,
    description,
    keywords: [brand.name, 'قطعات خودرو', 'لوازم یدکی'],
    openGraph: { title, description, type: 'website', url: `/brand/${slug}` },
    alternates: { canonical: `/brand/${slug}` },
  };
}

export default function BrandPage({ params }: { params: { slug: string } }) {
  const brand = catalogBrands.find(b => b.slug === params.slug);
  if (!brand) notFound();

  const products = catalogProducts.filter((p) => p.brand_slug === brand.slug);

  const breadcrumbItems = [
    { label: 'خانه', href: '/' },
    { label: 'فروشگاه', href: '/shop' },
    { label: brand.name },
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

      <div className="flex items-center gap-4 mb-8">
        {brand.logo && (
          <img src={brand.logo} alt={brand.name} className="h-16 w-auto rounded-xl" />
        )}
        <div>
          <h1 className="text-2xl font-bold text-dark-2">{brand.name}</h1>
          <p className="text-sm font-semibold text-dark-2 tabular-nums">{products.length} محصول</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {products.length === 0 && (
          <p className="col-span-full text-muted text-center py-12">محصولی برای این برند یافت نشد.</p>
        )}
      </div>

      <div className="mt-8 flex justify-center gap-2">
        <Link href="/shop" className="btn-outline px-8">بازگشت به فروشگاه</Link>
      </div>
    </div>
  );
}
