'use client';
import Link from 'next/link';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const PaymentVerifyContent = () => {
  const sp = useSearchParams();
  const status = sp.get('status') ?? undefined;
  const ref_id = sp.get('ref_id') ?? undefined;
  const order_number = sp.get('order_number') ?? undefined;
  const success = status === 'success';

  return (
    <div className="container mx-auto px-4 py-20 text-center max-w-lg">
      {success ? (
        <>
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-dark-2 mb-2">پرداخت موفق!</h1>
          <p className="text-muted mb-1">
            شماره سفارش: <span className="font-bold text-dark-2">{order_number}</span>
          </p>
          {ref_id && (
            <p className="text-muted mb-4">
              کد مرجع پرداخت: <span className="font-bold text-dark-2 font-mono">{ref_id}</span>
            </p>
          )}
          <p className="text-sm text-muted mb-8">
            سفارش شما با موفقیت ثبت و پرداخت شد. پس از پردازش، اطلاعات ارسال به شما اطلاع داده می‌شود.
          </p>
          <div className="flex gap-3 justify-center">
            <Link href="/my-account/orders" className="btn-primary px-6">مشاهده سفارش‌ها</Link>
            <Link href="/shop" className="btn-outline px-6">ادامه خرید</Link>
          </div>
        </>
      ) : (
        <>
          <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-dark-2 mb-2">پرداخت ناموفق</h1>
          <p className="text-muted mb-2">متأسفانه پرداخت شما تأیید نشد.</p>
          {order_number && (
            <p className="text-sm text-muted mb-2">
              شماره سفارش: <span className="font-mono">{order_number}</span> — سفارش ذخیره شده و می‌توانید مجدداً پرداخت کنید.
            </p>
          )}
          <p className="text-sm text-muted mb-8">
            در صورت کسر وجه از حساب، مبلغ ظرف ۷۲ ساعت به حساب شما بازمی‌گردد.
          </p>
          <div className="flex gap-3 justify-center">
            <Link href="/cart" className="btn-primary px-6">بازگشت به سبد</Link>
            <Link href="/my-account/orders" className="btn-outline px-6">سفارش‌های من</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default function PaymentVerifyPage() {
  return (
    <Suspense fallback={<div className="text-muted text-center py-20">در حال بارگذاری...</div>}>
      <PaymentVerifyContent />
    </Suspense>
  );
}
