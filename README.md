This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

## Static admin catalog

The admin catalog is frontend-only. Its five demo brands, categories, and
products live in `src/lib/admin-store.ts`; no backend or database is used.

### Add or edit an item in the admin UI

1. Start the app and open `/admin`.
2. Create categories and brands first from the sidebar.
3. Open **Products** and select **New product**. Fill in its name, URL slug,
   part number, category, brand, price, stock, weight, description, status,
   and product badge. You may also select an image.
4. Use **Edit** or **Delete** in each table to change an item during the open
   browser session.

Changes made through the UI intentionally reset on browser refresh, because
this is a static demo without persistence.

### Make an item permanent

Add or edit the appropriate object in the `seed` constant in
`src/lib/admin-store.ts`, then rebuild the app. Products should include all
the fields used by the form: `name`, `slug`, `part_number`, `description`,
`category`, `brand`, `price`, `sale_price`, `stock`, `weight`, `badge`,
`is_active`, `is_featured`, `created_at`, and an `images` array. Brand and
category IDs must match the product's `brand` and `category` values.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
