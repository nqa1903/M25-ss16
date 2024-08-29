"use client";

import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export default function HomePage() {
  const t = useTranslations('HomePage');
  const router = useRouter();
  const pathname = usePathname();
  
  const currentLocale = pathname.split('/')[1]; 
  
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    router.push(`/${selected}`);
  };

  return (
    <>
      <select id="langs" onChange={handleChange} value={currentLocale}>
        <option value="en">English</option>
        <option value="vi">Vietnamese</option>
      </select>
      <h1>{t('title')}</h1>
      <h2>{t('description')}</h2>
    </>
  );
}
